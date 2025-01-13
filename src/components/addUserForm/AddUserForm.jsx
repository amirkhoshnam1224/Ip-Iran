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
      endDate
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
      تعداد کاربران
      <input
        name="userCount"
        type="number"
        value={newUser.userCount}
        onChange={handleInputChange}
        placeholder="تعداد کاربران"
      />
      <select name="service" value={newUser.service} onChange={handleInputChange}>
        <option value="">انتخاب سرویس</option>
        <option value="OpenVPN">OpenVPN</option>
        <option value="V2Ray">V2Ray</option>
      </select>
      مبلغ دریافتی
      <input
        name="payment"
        type="number"
        value={newUser.payment}
        onChange={handleInputChange}
        placeholder="مبلغ دریافتی"
      />
      تخفیف
      <input
        name="discount"
        type="number"
        value={newUser.discount}
        onChange={handleInputChange}
        placeholder="تخفیف"
      />
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
