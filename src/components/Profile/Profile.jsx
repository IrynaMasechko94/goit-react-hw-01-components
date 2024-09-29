import React from 'react';
import css from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.followersList}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.viewsList}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.likesList}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
