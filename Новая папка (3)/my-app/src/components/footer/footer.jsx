'use client'
import React from "react";
import styles from "./footer.module.css";
import { Button } from "@/app/cva/button/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({children}) => {
  const router = usePathname();
  if (
    router != "/about" &&
    router != "/" &&
    router != "/services" &&
    router != "/contact" &&
    router != ""
  ) {
    return "";
  }
  return (
    <footer className={styles.footer}>
      <div className={`${styles.divFooter} container`}>
        <div>
          <h1 className={styles.icon}>DB-</h1>
          <p className={styles.p}>
            Lizenzo street number 12 Jakarta, Indonesia
          </p>
          <Button color={"primary"} size={"medium"}>
            Get directions
          </Button>
        </div>
        <div>
          <h1 className={styles.menu}>Menu</h1>
          <p className={styles.link}>
            <Link href="/">Home</Link>
          </p>
          <p className={styles.link}>
            <Link href="/about">About</Link>
          </p>
          <p className={styles.link}>
            <Link href="/gallery">Gallery</Link>
          </p>
          <p className={styles.link}>
            <Link href="services">Service</Link>
          </p>
        </div>
        <div>
          <h1 className={styles.menu}>Contact</h1>
          <p className={styles.link}>
            <Link href="/">E-mail</Link>
          </p>
          <p className={styles.link}>
            <Link href="/about">Mobile</Link>
          </p>
          <p className={styles.link}>
            <Link href="/gallery">Whatsapp</Link>
          </p>
          <p className={styles.link}>
            <Link href="services">Fax</Link>
          </p>
        </div>
        <div>
          <h1 className={styles.menu}>Career</h1>
          <p className={styles.link}>
            <Link href="/">Job</Link>
          </p>
          <p className={styles.link}>
            <Link href="/about">Part-time</Link>
          </p>
          <p className={styles.link}>
            <Link href="/gallery">Internship</Link>
          </p>
          <p className={styles.link}>
            <Link href="services">Service</Link>
          </p>
        </div>
        <div>
          <h1 className={styles.menu}>Business</h1>
          <p className={styles.link}>
            <Link href="/">Affiliate</Link>
          </p>
          <p className={styles.link}>
            <Link href="/about">Collaboration</Link>
          </p>
          <p className={styles.link}>
            <Link href="/gallery">Investment</Link>
          </p>
          <p className={styles.link}>
            <Link href="services">People</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
