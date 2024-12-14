import React from "react";
import styles from "./AboutUs.module.css"; // Use module CSS for better scoping
import teacher1 from "../Header/MathEliteLogo.png"; // Replace with actual image paths
import teacher2 from "../Header/MathEliteLogo.png"; // Replace with actual image paths
import teacher3 from "../Header/MathEliteLogo.png"; // Replace with actual image paths

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Introduction Section */}
      <div className={styles.heroSection}>
        <h1>Кои сме ние</h1>
        <p>
          Добре дошли в MathElite - платформа, създадена от студенти за студенти, с цел да вдъхновява и предоставя иновативни методи за изучаване на математика.
        </p>
      </div>

      {/* Teachers Section */}
      <div className={styles.teachersSection}>
        <h2>Нашите преподаватели</h2>
        <p className={styles.teachersDescription}>
          Екипът ни от преподаватели е съставен от висококвалифицирани професионалисти и студенти, които са страстно ангажирани с обучението. С богат опит в преподаването и състезателната математика, те предлагат персонализиран подход, адаптиран към нуждите на всеки ученик.
        </p>

        <div className={styles.teacherCards}>
          <div className={styles.teacherCard}>
            <img src={teacher1} alt="Teacher 1" className={styles.teacherPhoto} />
            <h3>Йордан Иванов</h3>
            <p>
              Студент по информатика и преподавател по математика с опит в подготовката на ученици за състезания и олимпиади. Йордан вярва, че с правилния подход всеки може да обикне математиката.
            </p>
          </div>

          <div className={styles.teacherCard}>
            <img src={teacher2} alt="Teacher 2" className={styles.teacherPhoto} />
            <h3>Елена Петрова</h3>
            <p>
              Завършила математика в Софийския университет, Елена има над 5 години опит в преподаването и е помогнала на десетки ученици да постигнат високи резултати.
            </p>
          </div>

          <div className={styles.teacherCard}>
            <img src={teacher3} alt="Teacher 3" className={styles.teacherPhoto} />
            <h3>Георги Стоянов</h3>
            <p>
              Специалист по приложна математика, Георги комбинира теоретичните знания с практически задачи, за да направи ученето лесно и ефективно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
