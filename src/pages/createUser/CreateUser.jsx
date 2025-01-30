import { useState } from "react";
import { loginToPanel } from "../../services/loginPanelSanaei";
import {addUserToInbound,getClientTrafficsByEmail,getClientTrafficsById} from '../../services/addUsersSanaei'

const CreateUser = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    expiryTime: "",
    remark: "",
    enable: true,
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await loginToPanel(loginData.username, loginData.password);
      if (response.success) {
        console.log("Login successful!");
        setIsLoggedIn(true); // وضعیت لاگین موفقیت‌آمیز
      } else {
        alert(response.msg || "Login failed!");
      }
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await addUserToInbound(1, userData); // 1 شناسه ورودی
      if (response.success) {
        alert("کاربر با موفقیت اضافه شد!");
      } else {
        alert(response.msg || "افزودن کاربر ناموفق بود.");
      }
    } catch (error) {
      alert("خطا در افزودن کاربر: " + error.message);
    }
  };
  const handleTestAPIs = async () => {
    try {
      const email = " amir.khoshnam1224@gmail.com	"; // اینجا ایمیلی که می‌خوای تست کنی رو بذار
      const clientId = "2f45b079-780c-49e6-890d-79d42284f33c"; // اینجا آیدی کاربر که می‌خوای تست کنی رو بذار
  
      // گرفتن اطلاعات ترافیک بر اساس ایمیل
      const responseByEmail = await getClientTrafficsByEmail(email);
      console.log("Response By Email:", responseByEmail);
  
      // گرفتن اطلاعات ترافیک بر اساس آیدی
      const responseById = await getClientTrafficsById(clientId);
      console.log("Response By ID:", responseById);
  
    } catch (error) {
      console.error("Error in API test:", error.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!isLoggedIn ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-96 mb-8">
          <h2 className="text-2xl font-bold mb-4">ورود به پنل ثنایی</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">نام کاربری</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            ورود
          </button>
        </div>
      ) : (
        <p className="text-xl text-green-500 font-bold">شما وارد پنل شدید!</p>
      )}

      {/* فرم افزودن کاربر */}
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">افزودن کاربر جدید</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">ایمیل</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleUserChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">زمان انقضا</label>
          <input
            type="date"
            name="expiryTime"
            value={userData.expiryTime}
            onChange={handleUserChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">توضیحات</label>
          <input
            type="text"
            name="remark"
            value={userData.remark}
            onChange={handleUserChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">فعال بودن</label>
          <input
            type="checkbox"
            name="enable"
            checked={userData.enable}
            onChange={(e) =>
              setUserData({ ...userData, enable: e.target.checked })
            }
          />
        </div>
        <button
          onClick={handleAddUser}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none"
        >
          افزودن کاربر
        </button>
        <button
  onClick={handleTestAPIs}
  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
>
  تست API
</button>

      </div>
    </div>
  );
};

export default CreateUser;
