import React from "react";

function AddUserForm({ newUser, handleInputChange, adduser }) {
  return (
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
      startDate
      <input
        name="startDate"
        type="date"
        value={newUser.startDate}
        onChange={handleInputChange}
      />


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

      <select name="referral" value={newUser.referral} onChange={handleInputChange}>
        <option value="">نحوه آشنایی</option>
        <option value="Telegram">تلگرام</option>
        <option value="Instagram">اینستاگرام</option>
        <option value="Website">سایت</option>
      </select>
      <button onClick={adduser}>افزودن کاربر</button>
    </div>
  );
}

export default AddUserForm;
