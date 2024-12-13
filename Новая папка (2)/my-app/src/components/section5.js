import React from "react";
import styles from "../css/section5.module.css";
import Image from "next/image";
import blogImage1 from "../assets/Без названия.jpeg";

const Section5 = () => {
  return (
    <div className={styles.sliderContainer}>
      <p className={styles.resourcesTitle}>OUR RESOURCES</p>
      <h2 className={styles.heading}>Start reading our blog</h2>

      <div className={styles.cardContainer}>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src={blogImage1}
              alt="Blog Image 1"
              className={styles.image}
            />
          </div>
          <div>
            <div className={styles.imageWrapper1}>
              <Image
                src={blogImage1}
                alt="Blog Image 2"
                className={styles.image}
              />
            </div>
            <div className={`${styles.imageWrapper1} ${styles.img}`}>
              <Image
                src={blogImage1}
                alt="Blog Image 3"
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          <h3 className={styles.cardTitle}>How to start planning</h3>
          <p className={styles.cardDescription}>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius ea, in mel dicant persecuti.
          </p>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>Read now</button>
            <button className={styles.secondaryButton}>
              Add to your bookmarks
            </button>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <span className={styles.arrow}>&larr;</span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.activeDot}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.arrow}>&rarr;</span>
      </div>
    </div>
  );
};

export default Section5;
