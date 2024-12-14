import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={styles["about-page"]}>
            {/* Hero Section */}
            <div className={styles["hero-section"]}>
                <h1>Кои сме ние</h1>
                <p>
                    Добре дошли в MathElite - платформа, създадена от студенти за
                    студенти, с цел да вдъхновява и предоставя иновативни методи за
                    изучаване на математика.
                </p>
            </div>

            {/* Our Team Section */}
            <div className={styles["team-section"]}>
                <h2>Нашите преподаватели</h2>
                <div className={styles["team-content"]}>
                    <div className={styles["profile-card"]}>
                        <h3>Йордан</h3>
                        <p>
                            Казвам се Йордан и съм студент в <strong>ППМГ Гео Милев</strong>,
                            където развих любовта си към математиката. Участвал съм в
                            състезания и надпревари по математика, което ми помогна да
                            изградя солидни основи. В момента уча <strong>информатика</strong> в
                            <strong> Пловдивския университет</strong>, като комбинирам знанията
                            си по математика с тези в компютърните науки.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className={styles["reviews-section"]}>
                <h2>Отзиви</h2>
                <div className={styles["review-card"]}>
                    <p>
                        "MathElite ми помогна да подобря знанията си по математика и да постигна
                        високи резултати. Благодарение на индивидуалния подход на Йордан, се
                        чувствам уверена в способностите си!"
                    </p>
                    <h4>- Студентка от София</h4>
                </div>
                <div className={styles["review-card"]}>
                    <p>
                        "Иновативните методи на обучение в MathElite направиха ученето по-забавно и
                        продуктивно. Благодарен съм за постоянната подкрепа!"
                    </p>
                    <h4>- Ученик от Пловдив</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
