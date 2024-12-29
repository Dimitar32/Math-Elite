import React, { useState, useEffect } from "react";
import styles from "../UserCertificates/UserCertificates.module.css";

const UserCertificates = () => {
  const [user, setUser] = useState(null); // Store user data
  const [certificates, setCertificates] = useState([]); // Store certificates
  const [editMode, setEditMode] = useState(false); // Toggle edit mode
  const [formData, setFormData] = useState({}); // Form data for editing

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);

      // Fetch certificates by user ID
      fetchCertificates(storedUser.id);
    }
  }, []);

  const fetchCertificates = async (userId) => {
    try {
      const response = await fetch(
        `https://localhost:7140/api/Certificate/GetCertificatesByUserId/${userId}`
      );
      if (!response.ok) throw new Error("Failed to fetch certificates");

      const data = await response.json();
      setCertificates(data); // Set fetched certificates
    } catch (error) {
      console.error("Error fetching certificates:", error.message);
    }
  };

  const handleEdit = (certificate) => {
    setEditMode(true);
    setFormData(certificate); // Set current certificate data for editing
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://localhost:7140/api/Certificate/update/${formData.id}`, // Update certificate by ID
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to update certificate");

      // Refresh the certificates list after updating
      fetchCertificates(user.id);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating certificate:", error.message);
    }
  };

  if (!user) {
    return <p>Loading user information...</p>;
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Сертификати</h2>
      </div>

      {/* Certificate List */}
      {!editMode ? (
        <div className={styles.certificateList}>
          {certificates.length === 0 ? (
            <p>Нямате сертификати.</p>
          ) : (
            certificates.map((certificate) => (
              <div className={styles.certificate} key={certificate.id}>
                <h3>{certificate.title}</h3>
                <p><strong>Дата:</strong> {certificate.date}</p>
                <p><strong>Описание:</strong> {certificate.description}</p>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(certificate)}
                >
                  Редактирай
                </button>
              </div>
            ))
          )}
        </div>
      ) : (
        // Edit Certificate Form
        <div className={styles.editForm}>
          <h3>Редактиране на сертификат</h3>
          <label>Заглавие:</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />

          <label>Дата:</label>
          <input
            type="date"
            name="date"
            value={formData.date || ""}
            onChange={handleChange}
          />

          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          ></textarea>

          <button className={styles.saveButton} onClick={handleSave}>
            Запази
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setEditMode(false)}
          >
            Откажи
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCertificates;

