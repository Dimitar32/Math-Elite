import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from localStorage or an API
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      {/* Sidebar */}
      <div className={styles.profileSidebar}>
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className={styles.profileImage}
        />
        <h3>@{user.username}</h3>
        <p>{user.fullName}</p>
        <p>{user.email}</p>
        <nav>
          <ul>
            <li>Обща информация</li>
            <li>Моето табло</li>
            <li>Обучения</li>
            <li>Плащания</li>
            <li>Сертификати</li>
            <li><Link to="/faq">Често задавани въпроси</Link></li>
            <li>Настройки</li>
            <li className={styles.logout}>Изход</li>
          </ul>
        </nav>
      </div>

      {/* Main Profile Information */}
      <div className={styles.profileContent}>
        <div className={styles.profileHeader}>
          <h2>Обща информация</h2>
        </div>
        <div className={styles.profileDetails}>
          {/* <div className={styles.detailRow}> */}
            <p><strong>Име:</strong> {user.fullName}</p>
            <p><strong>Дата на раждане:</strong> {user.birthDate || "N/A"}</p>
          {/* </div> */}
          {/* <div className={styles.detailRow}> */}
            <p><strong>Град:</strong> {user.city || "N/A"}</p>
            <p><strong>Страна:</strong> {user.country || "N/A"}</p>
          {/* </div>
          <div className={styles.detailRow}> */}
            <p><strong>Телефонен номер:</strong> {user.phone || "N/A"}</p>
            <p><strong>Пол:</strong> {user.gender || "N/A"}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
