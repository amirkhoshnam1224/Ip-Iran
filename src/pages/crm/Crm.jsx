import { useState, useEffect } from "react";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UserTable from "../../components/userTable/UserTable";
import "./crm.css";
import { fetchUsersServise, addUserServise } from '../../services/userServiceCrm'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deletUserServise, updateUserService } from "../../services/userServiceCrm";
import { GetChannelsServise, AddChannelServise, DeleteChannelServise } from "../../services/ChannelTelegram";



function CRM() {
    const [channels, setChannels] = useState([])
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        accountId: "", // کانال انتخاب‌شده از لیست
        startDate:"",
        endDate: "",
        plan: "1 ماه",
        userCount: 1,
        service: "OpenVPN",
        payment: 0,
        discount: 0,
        referral: "",
    });
    const [refreshChannel, setRefreshChannel] = useState(false)
    const [selectEditeUser, setSelectEditeUser] = useState("")

    const notify = () => {
        toast.success("کاربر با موفقیت اضافه شد!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    //get chenel telegram
    useEffect(() => {
        const fetchChannelsServise = async () => {
            try {
                const fetchedChannels = await GetChannelsServise(); // فرض کنید GetChannels لیستی از کانال‌ها را بازمی‌گرداند
                setChannels(fetchedChannels);
            } catch (error) {
                console.error("Error fetching channels:", error);
            }
        };
        fetchChannelsServise();
    }, [refreshChannel]);


    //fetch users
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsersServise();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        loadUsers();
    }, []);

    const addChannel = async (channelName) => {
        try {
            const newChannel = await AddChannelServise(channelName); // فرض کنید AddChannel کانال جدید را برمی‌گرداند
            setChannels((prevChannels) => [...prevChannels, newChannel]); // اضافه کردن مستقیم کانال جدید به لیست
            setRefreshChannel(prev => !prev);
            toast.success("کانال با موفقیت اضافه شد!");
        } catch (error) {
            console.error("Error adding channel:", error);
            toast.error("خطا در افزودن کانال.");
        }
    };




    const deletHandlerUser = async (id) => {
        try {
            const response = await deletUserServise(id.trim());
            if (response && response.status === 200) {
                toast.success("کاربر با موفقیت حذف شد!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                const updatedUsers = await fetchUsersServise(); // بازخوانی لیست کاربران
                setUsers(updatedUsers);
            } else {
                toast.error("خطا در حذف کاربر. لطفاً دوباره تلاش کنید.");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("خطا در حذف کاربر. لطفاً دوباره تلاش کنید.");
        }
    };
    const editeHandlerUser = (id) => {
        console.log(id)
        const userToEdite = users.find(user => user._id === id)
        setNewUser(userToEdite)
        setSelectEditeUser(userToEdite)

    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        const planDurations = {
            "1 ماه": 30,
            "3 ماه": 90,
            "6 ماه": 180,
            "12 ماه": 365,
        };
    
        const planPrices = {
            "1 ماه": 320000,
            "3 ماه": 720000,
            "6 ماه": 1120000,
            "12 ماه": 1920000,
        };
    
        setNewUser((prev) => {
            let updatedUser = { ...prev, [name]: value };
    
            // تنظیم مقدار پلن و مبلغ پرداختی
            if (name === "plan") {
                updatedUser.payment = planPrices[value] || 0;
            }
    
            // محاسبه تخفیف در صورت تغییر مبلغ دریافتی یا پلن
            if (name === "payment" || name === "plan") {
                const newPlanPrice = planPrices[updatedUser.plan] || 0;
                updatedUser.discount =
                    newPlanPrice > updatedUser.payment
                        ? Math.round(((newPlanPrice - updatedUser.payment) / newPlanPrice) * 100)
                        : 0;
            }
    
            // **محاسبه `startDate` و `endDate` بر اساس مقدار ورودی**
            if (name === "plan" || name === "startDate" || name === "endDate") {
                let startDate = new Date(updatedUser.startDate);
                let endDate = new Date(updatedUser.endDate);
                let daysToAdd = planDurations[updatedUser.plan] || 0;
    
                // اگر کاربر `endDate` را مستقیماً وارد کند، `startDate` را محاسبه کنیم
                if (name === "endDate") {
                    if (!isNaN(endDate) && daysToAdd > 0) {
                        startDate = new Date(endDate);
                        startDate.setDate(endDate.getDate() - daysToAdd);
                        updatedUser.startDate = startDate.toISOString().split("T")[0];
                    }
                } 
                // اگر کاربر `startDate` و `plan` را تغییر داد، `endDate` را محاسبه کنیم
                else if (!isNaN(startDate) && daysToAdd > 0) {
                    endDate = new Date(startDate);
                    endDate.setDate(startDate.getDate() + daysToAdd);
                    updatedUser.endDate = endDate.toISOString().split("T")[0];
                }
            }
    
            return updatedUser;
        });
    };
    



 const adduser = async () => {
    try {
        if (selectEditeUser) {
            // ارسال تغییر کابر
            const response = await updateUserService(selectEditeUser._id, newUser);
            console.log("Updated user response:", response);
        } else {
            // در غیر این صورت، کاربر جدید اضافه شود
            console.log("Creating new user:", newUser);
            const createdUser = await addUserServise(newUser);
            console.log("New user created:", createdUser);

            setUsers((prevUsers) => [...prevUsers, createdUser]);
        }

        // ریست فرم بعد از ارسال موفق
        setNewUser({
            firstName: "",
            lastName: "",
            accountId: "",
            startDate: new Date().toISOString().split("T")[0],
            plan: "",
            userCount: 1,
            service: "",
            payment: 0,
            discount: 0,
            referral: "",
        });

        setSelectEditeUser(""); // خروج از حالت ویرایش
        toast.success("عملیات با موفقیت انجام شد!");
    } catch (error) {
        console.error("خطا در افزودن یا ویرایش کاربر:", error);
        toast.error("خطا در ثبت کاربر. لطفاً دوباره تلاش کنید.");
    }
};


    //delet channel
    const handleDeleteChannel = async (id) => {
        try {
            const response = await DeleteChannelServise(id);
            setRefreshChannel(!refreshChannel)
            // بررسی پاسخ سرور
            if (response.status === 200) {
                toast.success("✅ حذف کانال با موفقیت انجام شد!");
            } else {
                toast.error(`⚠️ خطا در حذف کانال: ${response.data?.message || "مشکلی پیش آمده است."}`);
            }

        } catch (error) {
            console.error("Error deleting channel:", error);

            // بررسی انواع خطاها
            if (error.response) {
                // خطای مربوط به درخواست (مانند خطای 404، 500 و غیره)
                toast.error(`❌ خطا در سرور: ${error.response.status} - ${error.response.data?.message || "لطفاً دوباره تلاش کنید."}`);
            } else if (error.request) {
                // درخواست ارسال شده اما پاسخی دریافت نشده
                toast.error("❌ سرور پاسخ نمی‌دهد. لطفاً اتصال اینترنت خود را بررسی کنید.");
            } else {
                // سایر خطاها (مثلاً مشکل در کد)
                toast.error(`⚠️ خطای غیرمنتظره: ${error.message}`);
            }
        }
    };

    return (
        <div className="page-container">
            <ToastContainer />
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">افزودن کانال تلگرام:</label>
                <input
                    type="text"
                    placeholder="نام کانال تلگرام را وارد کنید"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.target.value.trim() !== "") {
                            addChannel(e.target.value.trim());
                            e.target.value = ""; // پاک کردن مقدار ورودی
                        }
                    }}
                />
            </div>


            <h1>مدیریت کاربران (CRM)</h1>
            <AddUserForm
                newUser={newUser}
                handleInputChange={handleInputChange}
                adduser={adduser}
                addChannel={addChannel}
                channels={channels}
                handleDeleteChannel={handleDeleteChannel}
                selectEditeUser={selectEditeUser}
            />
            <UserTable users={users} deletHandlerUser={deletHandlerUser} editeHandlerUser={editeHandlerUser} />
        </div>
    );
}

export default CRM;
