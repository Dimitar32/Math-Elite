import React from 'react';
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
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Наръчници за Ученици</h1>
      <ul className={styles.list}>
        {guides.map((guide) => (
          <li key={guide.grade} className={styles.listItem}>
            <a href={guide.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Изтегли наръчник за {guide.grade} клас
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidePage;
