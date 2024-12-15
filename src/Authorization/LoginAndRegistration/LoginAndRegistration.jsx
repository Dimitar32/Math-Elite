import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import styles from "./LoginAndRegistration.module.css";

const LoginAndRegistration = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Successful:", credentialResponse.credential);
  
    fetch("https://localhost:7140/api/GoogleLogin/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken: credentialResponse.credential }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to log in");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Backend response:", data);
  
        // Save user info in local storage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isLoggedIn", "true");
  
        window.dispatchEvent(new Event("storage"));

        navigate("/");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to log in. Please try again.");
      });
  };
  

  const handleGoogleLoginFailure = () => {
    console.error("Google Login Failed!");
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

            {/* Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
              render={(renderProps) => (
                <button
                  className={styles.googleButton}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle /> Вход с Google
                </button>
              )}
            />
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

            {/* Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
              render={(renderProps) => (
                <button
                  className={styles.googleButton}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle /> Вход с Google
                </button>
              )}
            />
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
