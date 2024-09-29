import React from 'react';
import css from './FriendList.module.css';

export default function FriendList({ friendsInfo }) {
  return (
    <ul className={css.friendList}>
      {friendsInfo.map(friend => (
        <li key={friend.id} className={css.item}>
          <div
            className={friend.isOnline ? css.statusOnline : css.statusOffline}
          ></div>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}> {friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
