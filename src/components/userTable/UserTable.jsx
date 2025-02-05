
function UserTable({ users, deletHandlerUser, editeHandlerUser }) {


  return (
    <div className="">
      <h2>لیست کاربران</h2>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th> accountId telegram</th>
            <th> startDate</th>
            <th> endDate</th>
            <th>plan</th>
            <th>payment</th>
            <th>discount</th>
            <th> referral</th>
            <th>service</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.accountId}</td>
              <td>{user.startDate ? user.startDate.split("T")[0] : ""}</td>
              <td>{user.endDate ? user.endDate.split("T")[0] : ""}</td>

              <td>{user.plan}</td>
              <td>{user.payment}</td>
              <td>%{user.discount}</td>
              <td>{user.referral}</td>
              <td>{user.service}</td>
              {/* <td>{user.userCount}</td> */}
              <td>
                <button
                  className="mx-auto bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => deletHandlerUser(user._id)}
                >
                  Delete
                </button>
                <button
                  className="mx-auto bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => editeHandlerUser(user._id)}
                >
                  edite
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
