import DataFetcher from "./DataFetcher";
import UserList from "./components/UserList";
import UserTable from "./components/UserTable";
import UserSummary from "./components/UserSummary";

const App = () => {
  return (
    <DataFetcher url="https://jsonplaceholder.typicode.com/users">
      {({ data: users, loading }) => {
        if (loading) return <p>Loading...</p>;

        return (
          <>
            <UserList users={users} />
            <UserTable users={users} />
            <UserSummary totalUsers={users.length} />
          </>
        );
      }}
    </DataFetcher>
  );
};

export default App;
