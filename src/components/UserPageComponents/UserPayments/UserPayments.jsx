import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../UserPayments/UserPayments.module.css";
import { FaMoneyCheckAlt } from "react-icons/fa";

const payments = [
  {
    id: "001",
    date: "2023-12-15",
    amount: "$100",
    status: "Paid",
  },
  {
    id: "002",
    date: "2023-11-10",
    amount: "$50",
    status: "Pending",
  },
  {
    id: "003",
    date: "2023-10-05",
    amount: "$75",
    status: "Paid",
  },
];

const UserPayments = () => {
  return (
    <div className={styles["payment-page"]}>
      {/* Hero Section */}
      <div className={styles["hero-section"]}>
        <h2>Моите Плащания</h2>
        <p>Прегледайте историята на вашите плащания и текущите статути.</p>
      </div>

      {/* Payment Table Section */}
      <div className={styles["table-section"]}>
        <h2 className={styles.heading}>История на Плащанията</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>ID</th>
              <th className={styles.tableHeader}>Дата</th>
              <th className={styles.tableHeader}>Сума</th>
              <th className={styles.tableHeader}>Статус</th>
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
                    payment.status === "Paid" ? styles.paid : styles.pending
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call-to-Action Section */}
      <div className={styles["cta-section"]}>
        <h2>Имате въпроси?</h2>
        <p>Свържете се с нас за съдействие относно плащанията си.</p>
        <button className={styles["cta-button"]} onClick={() => navigate("/contacts")}>Свържете се с Поддръжка</button>
        
        <button className={styles["cta-button"]}>
          <NavLink to="/profile/contacts">
                  Свържете се с Поддръжка
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default UserPayments;

/* Updated CSS */
