import React from "react";
import styles from "./Footer.module.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <h3 className={styles.title}>Fullstack Developer</h3>
      <h3 className={styles.title}>Frontend Developer</h3>
      <h3 className={styles.title}>Backend Developer</h3>
      <a
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        className={styles.icon}
        target="_blank"
      >
        <TiSocialLinkedin />
      </a>
      <a
        href="https://github.com/abhijitlimited1"
        className={styles.icon}
        target="_blank"
      >
        <FaGithub />
      </a>
    </section>
  );
}

export default Footer;
