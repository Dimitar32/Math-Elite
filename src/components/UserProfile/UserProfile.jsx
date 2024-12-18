import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    country: "",
    phone: "",
    gender: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        fullName: storedUser.fullName || "",
        birthDate: storedUser.birthDate || "",
        country: storedUser.country || "",
        phone: storedUser.phone || "",
        gender: storedUser.gender || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://localhost:7140/api/User/updateUserDetails/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to update user details");

      const result = await response.json();
      // alert(result.message);

      // Update local storage and state
      setUser({ ...user, ...formData });
      localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user details:", error.message);
    }
  };

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
            <li>
              <Link to="/faq">Често задавани въпроси</Link>
            </li>
            <li>Настройки</li>
            <li className={styles.logout}>Изход</li>
          </ul>
        </nav>
      </div>

      {/* Main Profile Information */}
      <div className={styles.profileContent}>
        <div className={styles.profileHeader}>
          <h2>Обща информация</h2>
          <button
            className={styles.editButton}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Откажи" : "Редактирай"}
          </button>
        </div>

        {/* User Details */}
        {!editMode ? (
          <div className={styles.profileDetails}>
            <p>
              <strong>Име:</strong> {user.fullName}
            </p>
            <p>
              <strong>Дата на раждане:</strong>{" "}
              {user.birthDate
                ? new Date(user.birthDate).toISOString().split("T")[0]
                : "N/A"}
            </p>
            <p>
              <strong>Страна:</strong> {user.country || "N/A"}
            </p>
            <p>
              <strong>Телефонен номер:</strong> {user.phone || "N/A"}
            </p>
            <p>
              <strong>Пол:</strong> {user.gender || "N/A"}
            </p>
          </div>
        ) : (
          <div className={styles.editForm}>
            <label>Име:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <label>Дата на раждане:</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />

            <label>Страна:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />

            <label>Телефонен номер:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Пол:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Избери</option>
              <option value="Мъж">Мъж</option>
              <option value="Жена">Жена</option>
            </select>

            <button className={styles.saveButton} onClick={handleSave}>
              Запази
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
