import React from "react";
import styles from "./Registration.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Registration = () => {
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
    };

    const handleEmailRegistration = (e) => {
        e.preventDefault();
        console.log("Email registration submitted");
    };

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.registrationCard}>
                <h1 className={styles.registrationTitle}>Регистрация</h1>
                <p className={styles.registrationDescription}>
                    Регистрирайте се, за да получите достъп до MathElite!
                </p>

                <div className={styles.socialLoginContainer}>
                    <button
                        className={`${styles.socialButton} ${styles.google}`}
                        onClick={handleGoogleLogin}
                    >
                        <FaGoogle className={styles.socialIcon} /> Регистрация с Google
                    </button>
                    <button
                        className={`${styles.socialButton} ${styles.facebook}`}
                        onClick={handleFacebookLogin}
                    >
                        <FaFacebook className={styles.socialIcon} /> Регистрация с Facebook
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>или</span>
                </div>

                <form
                    className={styles.registrationForm}
                    onSubmit={handleEmailRegistration}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Име"
                        className={styles.formInput}
                        required
                    />
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
                        Регистрирайте се
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
