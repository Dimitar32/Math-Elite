import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalculator, FaRocket, FaAward } from "react-icons/fa";
import styles from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles["home-page"]}>
            {/* Hero Section */}
            <div className={styles["hero-section"]}>
                <h2>Добре дошли в MathElite</h2>
                <p>
                    Превърнете ученето на математика в приключение! Нашата платформа
                    предоставя ефективен, иновативен и забавен начин за усвояване на
                    математическите умения.
                </p>
                <button
                    className={styles["cta-button"]}
                    onClick={() => navigate("/mission")}
                >
                    Научете повече
                </button>
            </div>

            {/* Features Section */}
            <div className={styles["features-section"]}>
                <h2>Какво предлагаме</h2>
                <div className={styles["features"]}>
                    <div className={styles["feature"]}>
                        <FaCalculator className={styles["feature-icon"]} />
                        <h3>Интерактивни уроци</h3>
                        <p>
                            Нашите уроци включват практични примери и интерактивни задачи,
                            за да направим ученето лесно и интересно.
                        </p>
                    </div>
                    <div className={styles["feature"]}>
                        <FaRocket className={styles["feature-icon"]} />
                        <h3>Индивидуален подход</h3>
                        <p>
                            Всеки ученик получава персонализиран план за обучение,
                            съобразен с нивото и целите му.
                        </p>
                    </div>
                    <div className={styles["feature"]}>
                        <FaAward className={styles["feature-icon"]} />
                        <h3>Постигане на резултати</h3>
                        <p>
                            С MathElite ще постигнете увереност и високи резултати в
                            математиката!
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className={styles["cta-section"]}>
                <h2>Готови ли сте да започнете?</h2>
                <p>
                    Присъединете се към MathElite и започнете вашето пътешествие към успеха
                    в математиката!
                </p>
                <button
                    className={styles["cta-button"]}
                    onClick={() => navigate("/registration")}
                >
                    Регистрирайте се сега
                </button>
            </div>
        </div>
    );
};

export default Home;
