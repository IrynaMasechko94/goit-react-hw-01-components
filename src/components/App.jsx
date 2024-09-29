import Profile from './Profile/Profile';
import user from '../API/user.json';
import Statistics from './Statistics/Statistics';
import data from '../API/data.json';
import FriendList from './FriendList/FriendList';
import friendsInfo from '../API/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../API/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsInfo={friendsInfo} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
