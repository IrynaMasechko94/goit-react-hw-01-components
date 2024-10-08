import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statisticsContainer}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.statListItem}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
