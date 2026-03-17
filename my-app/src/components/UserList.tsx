const UserList = ({ users }) => (
  <div>
    <h2>User List</h2>
    {users.map((user) => (
      <p key={user.id}>{user.name}</p>
    ))}
  </div>
);
export default UserList;
