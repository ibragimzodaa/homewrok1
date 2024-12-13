// components/TestimonialSection.js
import styles from '../css/section6.module.css';
import Image from 'next/image';
import icon from '../assets/Ellipse 2.1.png'

export default function Section6() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.content}>
        <div>
          <p>TESTIMONIALS</p>
        <h2 className={styles.title}>Customers's quotes</h2>
        <p className={styles.subtitle}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
        </p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an,
            in mel dicent persecuti.
          </p>
          <div className={styles.profile}>
            <Image
              src={icon}
              alt="Customer"
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </section>
  );
}
