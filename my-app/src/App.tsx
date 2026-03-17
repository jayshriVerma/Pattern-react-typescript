import React, { useState, useEffect } from "react";

const UserList = ({ users }) => (
  <div>
    <h2>User List</h2>
    {users.map((user) => (
      <p key={user.id}>{user.name}</p>
    ))}
  </div>
);

const UserTable = ({ users }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const UserSummary = ({ totalUsers }) => <h3>Total Users: {totalUsers}</h3>;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <UserList users={users} />
      <UserTable users={users} />
      <UserSummary totalUsers={users.length} />
    </>
  );
};
export default App;
