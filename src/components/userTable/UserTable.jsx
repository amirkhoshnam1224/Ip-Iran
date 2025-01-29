
function UserTable({ users, deletHandler }) {


  return (
    <div className="">
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.accountId}</td>
              <td>{user.startDate}</td>
              <td>{user.endDate}</td>
              <td>{user.plan}</td>
              <td>{user.service}</td>
              <td>{user.userCount}</td>
              <td>{user.payment}</td>
              <td>{user.discount}</td>
              <td>{user.referral}</td>
              <td>
                <button
                  className="mx-auto bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => deletHandler(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
