import React from "react";
import styles from "./Footer.module.css";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <h3 className={styles.title}>Fullstack Developer</h3>
      <h3 className={styles.title}>Frontend Developer</h3>
      <h3 className={styles.title}>Backend Developer</h3>
      <a
        href="https://www.linkedin.com/in/abhijit-hemram-66b431254/"
        className={styles.icon}
      >
        <TiSocialLinkedin />
      </a>
    </section>
  );
}

export default Footer;
