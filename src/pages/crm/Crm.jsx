import { useState, useEffect } from "react";
import "./crm.css";
import axios from "axios";
function CRM() {
    const [users, setUsers] = useState([]); // استیت برای لیست کاربران
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        accountId: "",
        startDate: "",
        endDate: "",
        plan: "",
        userCount: 1,
        service: "",
        payment: 0,
        discount: 0,
        referral: "",
    });
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://backend-crm-production.up.railway.app/api/users');
                console.log("Fetched users:", response.data);
                setUsers(response.data); // ذخیره داده‌ها در استیت
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchUsers();
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setNewUser((prev) => ({
            ...prev, [name]: value,
        }))
    };
    
    const adduser = async () => {
        try {
            const response = await axios.post("https://backend-crm-production.up.railway.app/api/users", newUser);
            console.log("User added:", response.data);
    
            const updatedUsers = [...users, response.data];
            setUsers(updatedUsers);
            setNewUser({
                firstName: "",
                lastName: "",
                accountId: "",
                startDate: "",
                endDate: "",
                plan: "",
                userCount: 1,
                service: "",
                payment: 0,
                discount: 0,
                referral: "",
            });
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
    



    return (
        <div className="page-container">
            <h1>مدیریت کاربران (CRM)</h1>

            {/* فرم افزودن کاربر */}
            <div className="form-container">
                <h2>افزودن کاربر جدید</h2>
                <input
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleInputChange}
                    placeholder="نام"
                />
                <input
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleInputChange}
                    placeholder="نام خانوادگی"
                />
                <input
                    name="accountId"
                    value={newUser.accountId}
                    onChange={handleInputChange}
                    placeholder="آیدی اکانت"
                />
                <input
                    name="startDate"
                    type="date"
                    value={newUser.startDate}
                    onChange={handleInputChange}
                />
                <input
                    name="endDate"
                    type="date"
                    value={newUser.endDate}
                    onChange={handleInputChange}
                />
                <select name="plan" value={newUser.plan} onChange={handleInputChange}>
                    <option value="">انتخاب پلن</option>
                    <option value="1 ماه">1 ماه</option>
                    <option value="3 ماه">3 ماه</option>
                    <option value="6 ماه">6 ماه</option>
                </select>
                <input
                    name="userCount"
                    type="number"
                    value={newUser.userCount}
                    onChange={handleInputChange}
                    placeholder="تعداد کاربران"
                />
                <select
                    name="service"
                    value={newUser.service}
                    onChange={handleInputChange}
                >
                    <option value="">انتخاب سرویس</option>
                    <option value="OpenVPN">OpenVPN</option>
                    <option value="V2Ray">V2Ray</option>
                </select>
                <input
                    name="payment"
                    type="number"
                    value={newUser.payment}
                    onChange={handleInputChange}
                    placeholder="مبلغ دریافتی"
                />
                <input
                    name="discount"
                    type="number"
                    value={newUser.discount}
                    onChange={handleInputChange}
                    placeholder="تخفیف"
                />
                <select
                    name="referral"
                    value={newUser.referral}
                    onChange={handleInputChange}
                >
                    <option value="">نحوه آشنایی</option>
                    <option value="Telegram">تلگرام</option>
                    <option value="Instagram">اینستاگرام</option>
                    <option value="Website">سایت</option>
                </select>
                <button onClick={adduser}>افزودن کاربر</button>
            </div>

            {/* نمایش لیست کاربران */}
            <div className="table-container">
                <h2>لیست کاربران</h2>
                <table>
                    <thead>
                        <tr>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>آیدی اکانت</th>
                            <th>تاریخ شروع</th>
                            <th>تاریخ پایان</th>
                            <th>پلن</th>
                            <th>تعداد کاربران</th>
                            <th>سرویس</th>
                            <th>مبلغ</th>
                            <th>تخفیف</th>
                            <th>منبع آشنایی</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.accountId}</td>
                                <td>{user.startDate}</td>
                                <td>{user.endDate}</td>
                                <td>{user.plan}</td>
                                <td>{user.userCount}</td>
                                <td>{user.service}</td>
                                <td>{user.payment}</td>
                                <td>{user.discount}</td>
                                <td>{user.referral}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
 
            </div>
        </div>
    );
}

export default CRM;
