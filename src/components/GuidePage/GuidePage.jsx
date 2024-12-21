import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaDownload, FaGraduationCap } from 'react-icons/fa';
import styles from '../GuidePage/GuidePage.module.css';

const guides = [
  { grade: 1, link: '/guides/grade-1.pdf' },
  { grade: 2, link: '/guides/grade-2.pdf' },
  { grade: 3, link: '/guides/grade-3.pdf' },
  { grade: 4, link: '/guides/grade-4.pdf' },
  { grade: 5, link: '/guides/grade-5.pdf' },
  { grade: 6, link: '/guides/grade-6.pdf' },
  { grade: 7, link: '/guides/grade-7.pdf' },
];

const GuidePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['guide-page']}>
      {/* Hero Section */}
      <div className={styles['hero-section']}>
        <h2>Добре дошли в Наръчници за Ученици</h2>
        <p>
          Открийте учебни материали за всяка степен, които ще ви помогнат в
          постигането на вашите академични цели.
        </p>
      </div>

      {/* Guides Section */}
      <div className={styles['features-section']}>
        <h2>Налични наръчници</h2>
        <div className={styles['features']}>
          {guides.map((guide) => (
            <div key={guide.grade} className={styles['feature']}>
              <FaBook className={styles['feature-icon']} />
              <h3>Клас {guide.grade}</h3>
              <p>
                Изтеглете наръчник за {guide.grade} клас, който съдържа
                полезни ресурси и задачи.
              </p>
              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['cta-button']}
              >
                Изтегли
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className={styles['cta-section']}>
        <h2>Готови ли сте да учите?</h2>
        <p>
          Възползвайте се от нашите безплатни ресурси и постигнете успех в
          обучението си!
        </p>
        <button
          className={styles['cta-button']}
          onClick={() => navigate('/loginOrRegistration')}
        >
          Регистрирайте се сега
        </button>
      </div>
    </div>
  );
};

export default GuidePage;
