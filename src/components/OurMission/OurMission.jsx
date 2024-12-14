import React from "react";
import { FaCogs, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import styles from "./OurMission.module.css";

const OurMission = () => {
    return (
        <div className={styles["mission-container"]}>
            <h1 className={styles["mission-title"]}>Нашата Мисия</h1>
            <p className={styles["mission-description"]}>
                Нашата платформа се стреми да промени начина, по който учениците изучават
                математика, като предлага алтернативен и ефективен подход към ученето. Ние
                вярваме, че всеки може да обикне математиката и да постигне успех!
            </p>
            <div className={styles["mission-features"]}>
                <div className={styles["feature-card"]}>
                    <FaCogs className={styles["feature-icon"]} />
                    <h2 className={styles["feature-title"]}>Практически умения</h2>
                    <p className={styles["feature-description"]}>
                        Учението чрез решаване на задачи и прилагане на концепции подпомага
                        развитието на практически умения.
                    </p>
                </div>
                <div className={styles["feature-card"]}>
                    <FaLightbulb className={styles["feature-icon"]} />
                    <h2 className={styles["feature-title"]}>Иновации</h2>
                    <p className={styles["feature-description"]}>
                        Нашата платформа включва интерактивни материали, за да направи ученето
                        по-забавно и ефективно.
                    </p>
                </div>
                <div className={styles["feature-card"]}>
                    <FaGraduationCap className={styles["feature-icon"]} />
                    <h2 className={styles["feature-title"]}>Постоянна подкрепа</h2>
                    <p className={styles["feature-description"]}>
                        Осигуряваме насоки и подкрепа на учениците през цялото им
                        математическо пътуване.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
