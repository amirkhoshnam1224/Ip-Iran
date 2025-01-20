import { useState, useEffect } from "react";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UserTable from "../../components/userTable/UserTable";
import "./crm.css";
import { fetchUsers,addUser } from '../../services/userService'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deletUser } from "../../services/userService";
import { data } from "react-router-dom";

function CRM() {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        accountId: "",
        startDate: new Date().toISOString().split("T")[0], // تاریخ روز جاری
        plan: "",
        userCount: 1,
        service: "OpenVPN",
        payment: 0,
        discount: 0,
        referral: "",
    });
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
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers()
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        loadUsers();
    }, []);

    const deletHandler = async (id) => {
        try {
            const response = await deletUser(id.trim());
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
                const updatedUsers = await fetchUsers(); // بازخوانی لیست کاربران
                setUsers(updatedUsers);
            } else {
                toast.error("خطا در حذف کاربر. لطفاً دوباره تلاش کنید.");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("خطا در حذف کاربر. لطفاً دوباره تلاش کنید.");
        }
    };
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        const planPrices = {
            "1 ماه": 320000,
            "3 ماه": 720000,
            "6 ماه": 1120000,
            "12 ماه": 1920000,
        };
    
        setNewUser((prev) => {
            // مبلغ پلن فعلی
            const currentPlanPrice = planPrices[prev.plan] || 0;
    
            // تنظیم مقدار جدید مبلغ دریافتی
            let updatedPayment = prev.payment;
            if (name === "payment") {
                updatedPayment = parseFloat(value);
            }
    
            // تنظیم مقدار پلن
            let updatedPlan = prev.plan;
            if (name === "plan") {
                updatedPlan = value;
                updatedPayment = planPrices[value] || 0; // اگر پلن تغییر کند، مبلغ به‌روز می‌شود
            }
    
            // محاسبه تخفیف فقط در صورت تغییر مبلغ دریافتی یا پلن
            let discount = prev.discount;
            if (name === "payment" || name === "plan") {
                const newPlanPrice = planPrices[updatedPlan] || 0;
                if (newPlanPrice > updatedPayment) {
                    discount = Math.round(((newPlanPrice - updatedPayment) / newPlanPrice) * 100);
                } else {
                    discount = 0; // اگر تخفیفی نباشد
                }
            }
    
            // بازگشت مقدار جدید به state
            return {
                ...prev,
                [name]: value,
                payment: updatedPayment,
                plan: updatedPlan,
                discount, // مقدار تخفیف به‌روزرسانی‌شده
            };
        });
    };
    
    
    
      
    const adduser = async () => {
        try {
            const createdUser  = await addUser(newUser)
            setUsers((prevUsers) => [...prevUsers, createdUser]);
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
            notify(); 
        } catch (error) {
            console.error("Error adding user:", error);
            toast.error("خطا در ثبت کاربر. لطفاً دوباره تلاش کنید."); // پیام خطا

        }
    };

    return (
        <div className="page-container">
             <ToastContainer /> 
            <h1>مدیریت کاربران (CRM)</h1>
            <AddUserForm
                newUser={newUser}
                handleInputChange={handleInputChange}
                adduser={adduser}
            />
            <UserTable users={users} deletHandler={deletHandler}/>
        </div>
    );
}

export default CRM;
