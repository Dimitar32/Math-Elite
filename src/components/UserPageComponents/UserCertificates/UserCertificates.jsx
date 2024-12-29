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

  return (
    <div className={styles["certificate-page"]}>
      {/* Hero Section */}
      <div className={styles["hero-section"]}>
        <h2>Моите Сертификати</h2>
        <p>Вижте вашите сертификати, придобити по време на обучението ви в MathElite.</p>
      </div>

      {/* Certificate Cards Section */}
      <div className={styles["card-section"]}>
        <h2 className={styles.heading}>Постижения</h2>
        {certificates.length === 0 ? (
          <p>Нямате налични сертификати.</p>
        ) : (
          <div className={styles.cardContainer}>
            {certificates.map((certificate, index) => (
              <div className={styles.card} key={index}>
                <h3 className={styles.title}>{certificate.title}</h3>
                <p className={styles.date}>{certificate.date}</p>
                <p className={styles.description}>{certificate.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCertificates;




