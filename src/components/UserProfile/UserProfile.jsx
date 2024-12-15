import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const profilePic = localStorage.getItem("profilePic");

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      // Add profilePic to the user object
      setUser({ ...parsedUser, profilePic });
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <h2>Твоят профил</h2>
      <img
        src={user.profilePic || "https://via.placeholder.com/150"}
        alt="Profile"
        className={styles.profilePic}
      />
      <p>Име: {user.fullName}</p>
      <p>Имейл: {user.email}</p>
    </div>
  );
};

export default UserProfile;
