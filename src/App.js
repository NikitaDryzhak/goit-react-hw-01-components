import "./App.css";
import Profile from "./components/profile/Profile";
import user from "../src/components/profile/user.json";
import data from "../src/components/statistics/data.json";
import Statistics from "./components/statistics/Statistics";
import friends from "../src/components/friends/friends.json";
import FriendList from "./components/friends/FriendList";
import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "../src/components/transactions/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
