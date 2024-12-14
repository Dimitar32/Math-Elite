import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import styles from "./LoginAndRegistration.module.css";

const LoginAndRegistration = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked!");
    // Add Google login integration here
  };

  const handleFacebookLogin = () => {
    console.log("Facebook Login clicked!");
    // Add Facebook login integration here
  };

  return (
    <div className={styles.container}>
      {/* Tab Navigation */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "login" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("login")}
        >
          Вход
        </button>
        <button
          className={`${styles.tab} ${activeTab === "register" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("register")}
        >
          Регистрация
        </button>
      </div>

      {/* Form Container */}
      <div className={styles.formContainer}>
        {activeTab === "login" && (
          <div className={styles.loginForm}>
            <h2>Влез в системата на MathElite</h2>
            
            <input type="text" placeholder="Потребителско име" className={styles.inputField} />
            <div className={styles.passwordContainer}>
              <input type="password" placeholder="Парола" className={styles.inputField} />
              <span className={styles.showPassword}>👁️</span>
            </div>
            <a href="#" className={styles.forgotPassword}>Забравена парола?</a>
            <button className={styles.actionButton}>ВХОД</button>
            <div className={styles.rememberMe}>
              {/* <input type="checkbox" id="rememberMe" /> */}
              {/* <label htmlFor="rememberMe">Запомни ме</label> */}
            </div>
            
            <p className={styles.orText}>или</p>

            <button className={styles.googleButton} onClick={handleGoogleLogin}>
              <FaGoogle /> Вход с Google
            </button>
            <button className={styles.facebookButton} onClick={handleFacebookLogin}>
              <FaFacebook /> Вход с Facebook
            </button>
          </div>
        )}

        {activeTab === "register" && (
          <div className={styles.registerForm}>
            <h2>Регистрирайте се в MathElite</h2>

            <input type="text" placeholder="Име" className={styles.inputField} />
            <input type="email" placeholder="Имейл адрес" className={styles.inputField} />
            <input type="password" placeholder="Парола" className={styles.inputField} />
            <button className={styles.actionButton}>Регистрирайте се</button>
            <p className={styles.switchToLogin}>
              Вече имате профил?{" "}
              <span className={styles.link} onClick={() => handleTabChange("login")}>
                Вход
              </span>
            </p>
            
            <p className={styles.orText}>или</p>

            <button className={styles.googleButton} onClick={handleGoogleLogin}>
              <FaGoogle /> Вход с Google
            </button>
            <button className={styles.facebookButton} onClick={handleFacebookLogin}>
              <FaFacebook /> Вход с Facebook
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAndRegistration;
