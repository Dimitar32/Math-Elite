import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../UserLayout/UserLayout.module.css";

const UserLayout = ({ children }) => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
};

  if (!storedUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      {/* Sidebar */}
      <div className={styles.profileSidebar}>
        <img
          src={storedUser.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className={styles.profileImage}
        />
        <h3>@{storedUser.username}</h3>
        <p>{storedUser.fullName}</p>
        <p>{storedUser.email}</p>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Обща информация
              </NavLink>
            </li>
            <li>Моето табло</li>
            <li>Обучения</li>
            <li>
              <NavLink
                to="/profile/userPayments"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Плащания
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/userCertificates"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Сертификати
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/faq"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Често задавани въпроси
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/guide"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Наръчник
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/contacts"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Контакти
              </NavLink>
            </li>
            <li>Настройки</li>
            <li className={styles.logout}>
                {/*<button onClick={handleLogout} >*/}
                Изход
                {/* </button> */}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.profileContent}>{children}</div>
    </div>
  );
};

export default UserLayout;
