import React from "react";
import styles from "./Login.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
    };

    const handleEmailLogin = (e) => {
        e.preventDefault();
        console.log("Email login submitted");
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1 className={styles.loginTitle}>Вход</h1>
                <p className={styles.loginDescription}>
                    Влезте в MathElite, за да получите достъп до вашия акаунт!
                </p>

                <div className={styles.socialLoginContainer}>
                    <button
                        className={`${styles.socialButton} ${styles.google}`}
                        onClick={handleGoogleLogin}
                    >
                        <FaGoogle className={styles.socialIcon} /> Вход с Google
                    </button>
                    <button
                        className={`${styles.socialButton} ${styles.facebook}`}
                        onClick={handleFacebookLogin}
                    >
                        <FaFacebook className={styles.socialIcon} /> Вход с Facebook
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>или</span>
                </div>

                <form className={styles.loginForm} onSubmit={handleEmailLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Имейл адрес"
                        className={styles.formInput}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Парола"
                        className={styles.formInput}
                        required
                    />
                    <button type="submit" className={styles.ctaButton}>
                        Вход
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
