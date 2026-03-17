import useFetch from "./hooks/useFetch";
import UserList from "./components/UserList";
import UserTable from "./components/UserTable";
import UserSummary from "./components/UserSummary";

interface User {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!users) return <p>No users found</p>;

  return (
    <>
      <UserList users={users} />
      <UserTable users={users} />
      <UserSummary totalUsers={users.length} />
    </>
  );
};

export default App;
