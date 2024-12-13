import React from 'react';
import styles from '../css/StatsSection.module.css';
import Image from 'next/image';
import productivityIcon from '../assets/Group (2).png';
import userImage from '../assets/Group 4.png'

const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.statCard} ${styles.blueBackground}`}>
        <Image src={productivityIcon} alt="Productivity Icon" className={styles.icon} />
        <h1 className={styles.statValue}>89%</h1>
        <p className={styles.statText}>Customers who have increased their productivity</p>
      </div>
      <div className={`${styles.statCard} ${styles.lightBackground}`}>
        <Image src={userImage} alt="Users Icon" className={styles.icon} />
        <h1 className={styles.statValue}>3123</h1>
        <p className={styles.statText}>Users who have used our application</p>
      </div>
    </div>
  );
};

export default Section4;
