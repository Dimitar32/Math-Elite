import React from 'react';
import styles from '../UserPayments/UserPayments.module.css';

const payments = [
  {
    id: '001',
    date: '2023-12-15',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: '002',
    date: '2023-11-10',
    amount: '$50',
    status: 'Pending',
  },
  {
    id: '003',
    date: '2023-10-05',
    amount: '$75',
    status: 'Paid',
  },
];

const UserPayments = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Payments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Payment ID</th>
            <th className={styles.tableHeader}>Date</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{payment.id}</td>
              <td className={styles.tableCell}>{payment.date}</td>
              <td className={styles.tableCell}>{payment.amount}</td>
              <td
                className={`${styles.tableCell} ${
                  payment.status === 'Paid' ? styles.paid : styles.pending
                }`}
              >
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPayments;
