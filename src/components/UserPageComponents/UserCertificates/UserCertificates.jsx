import React from 'react';
import styles from '../UserCertificates/UserCertificates.module.css';

const certificates = [
  {
    title: 'Mathematics Olympiad Winner',
    date: 'June 2023',
    description: 'Awarded for achieving 1st place in the National Mathematics Olympiad.',
  },
  {
    title: 'Algebra Mastery Certification',
    date: 'December 2022',
    description: 'Certified for completing the advanced algebra course with distinction.',
  },
  {
    title: 'Geometry Genius Award',
    date: 'March 2023',
    description: 'Recognized for outstanding performance in geometry problem-solving.',
  },
];

const UserCertificates = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Certificates</h2>
      <div className={styles.cardContainer}>
        {certificates.map((certificate, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.title}>{certificate.title}</h3>
            <p className={styles.date}>{certificate.date}</p>
            <p className={styles.description}>{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCertificates;
