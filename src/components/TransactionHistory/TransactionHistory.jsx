import React from 'react';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.hederRow}>
        <tr className={css.valuesRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={css.valuesRow}>
            <td className={css.transactionData}>{transaction.type}</td>
            <td className={css.transactionData}>{transaction.amount}</td>
            <td className={css.transactionData}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
