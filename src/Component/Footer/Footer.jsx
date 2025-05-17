import React from "react";
import styles from "./Footer.module.css";
import { TiSocialLinkedin } from "react-icons/ti";
import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.scrollTop} onClick={scrollToTop}>
        <FaArrowUp />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Abhijit Hemram</h3>
          <p className={styles.footerDescription}>
            Building digital experiences with code and creativity. Let's work
            together to bring your ideas to life.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <TiSocialLinkedin />
            </a>
            <a
              href="https://github.com/abhijitlimited1"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:abhijit@example.com"
              className={styles.socialIcon}
              aria-label="Email Me"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Services</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLink}>
              <FaCode className={styles.linkIcon} /> Web Development
            </li>
            <li className={styles.footerLink}>
              <FaLaptopCode className={styles.linkIcon} /> Frontend Development
            </li>
            <li className={styles.footerLink}>
              <FaServer className={styles.linkIcon} /> Backend Development
            </li>
            <li className={styles.footerLink}>
              <FaMobileAlt className={styles.linkIcon} /> Responsive Design
            </li>
            <li className={styles.footerLink}>
              <FaDatabase className={styles.linkIcon} /> Database Design
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#home" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.footerLink}>
                About
              </a>
            </li>
            <li>
              <a href="#project" className={styles.footerLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {currentYear} Abhijit Hemram. All rights reserved.
        </p>
        <p className={styles.credits}>
          Designed & Built with <span className={styles.heart}>❤</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
