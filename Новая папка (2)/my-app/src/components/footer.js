import React from 'react';
import styles from '../css/footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <nav className={styles.nav}>
            <p className={styles.link}>Home</p>
            <p className={styles.link}>Blog</p>
            <p className={styles.link}>Features</p>
            <p className={styles.link}>Pricing</p>
            <p className={styles.link}>Documentation</p>
          </nav>
        </div>

        <div className={styles.right}>
          <button className={styles.button}>Get started</button>
        </div>
      </div>

      <div className={styles.bottom}>
        Copyright © 2018 By Random Site
      </div>
    </footer>
  );
};

export default Footer;
