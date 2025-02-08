import { useState } from "react";
import CustomDropdown from './customDropdown/CustomDropdown'
function AddUserForm({ newUser, handleInputChange, adduser, channels, handleDeleteChannel, selectEditeUser }) {
    const [selectedChannel, setSelectedChannel] = useState("");

    const handelChannelSelect = (channelSelect) => {
        setSelectedChannel(channelSelect);
        handleInputChange({ target: { name: "accountId", value: channelSelect } });
    };



    return (
        <div className="form-container">
            <h2>افزودن کاربر جدید</h2>

            {/* ورودی نام */}
            <input
                name="firstName"
                value={newUser.firstName}
                onChange={handleInputChange}
                placeholder="نام"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />

            {/* ورودی نام خانوادگی */}
            <input
                name="lastName"
                value={newUser.lastName}
                onChange={handleInputChange}
                placeholder="نام خانوادگی"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />

            {/* انتخاب کانال تلگرام */}
            {/* انتخاب کانال تلگرام با منوی سفارشی */}
            <CustomDropdown
                channels={channels}
                selectedChannel={selectedChannel}
                setSelectedChannel={handelChannelSelect}
                handleDeleteChannel={handleDeleteChannel}
            />


            {/* انتخاب تاریخ شروع */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">تاریخ شروع:</label>
                <input
                    name="startDate"
                    type="date"
                    value={newUser.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
            </div>

            {/* انتخاب پلن */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">پلن:</label>
                <select
                    name="plan"
                    value={newUser.plan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                    <option value="1 ماه">1 ماه</option>
                    <option value="3 ماه">3 ماه</option>
                    <option value="6 ماه">6 ماه</option>
                    <option value="12 ماه">12 ماه</option>
                </select>
            </div>
            {/* نمایش تاریخ پایان سرویس (غیرقابل تغییر) */}
            {/* انتخاب تاریخ پایان سرویس */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">تاریخ پایان سرویس:</label>
                <input
                    name="endDate"
                    type="date"
                    value={newUser.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
            </div>


            {/* مبلغ دریافتی */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">مبلغ دریافتی (تومان):</label>
                <input
                    name="payment"
                    type="number"
                    value={newUser.payment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            {/* تخفیف */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">تخفیف (٪):</label>
                <input
                    name="discount"
                    type="number"
                    value={newUser.discount}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
                />
            </div>


            {/* نحوه آشنایی */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">نحوه آشنایی:</label>
                <select
                    name="referral"
                    value={newUser.referral}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                >
                    <option value="">نحوه آشنایی</option>
                    <option value="Telegram">تلگرام</option>
                    <option value="Instagram">اینستاگرام</option>
                    <option value="Website">سایت</option>
                </select>
            </div>
            <select name="service" value={newUser.service} onChange={handleInputChange}>
                <option value="">انتخاب سرویس</option>
                <option value="OpenVPN">OpenVPN</option>
                <option value="V2Ray">V2Ray</option>
            </select>
            {/* دکمه افزودن کاربر */}
            <button
                onClick={adduser}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
                {selectEditeUser ? "ثبت تغییرات" : "افزودن کاربر"}
            </button>

        </div>
    );
}

export default AddUserForm;