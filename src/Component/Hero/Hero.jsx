import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import profile from "../../assets/avatar1.png";
import {
  FaUser,
  FaCode,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoEye } from "react-icons/io5";

function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = [
      "UI Developer",
      "Fullstack Developer",
      "Frontend Developer",
      "Backend Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (typingRef.current) {
        if (isDeleting) {
          // Deleting text
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex - 1
          );
          charIndex--;
          typingSpeed = 50;
        } else {
          // Typing text
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex + 1
          );
          charIndex++;
          typingSpeed = 100;
        }

        // If word is complete, start deleting after pause
        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = 1000; // Pause at the end of word
        }

        // If deletion is complete, move to next word
        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(type, typingSpeed);
    };

    // Start the typing effect
    setTimeout(type, 1000);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.mainInfo}>
        <div className={styles.greeting}>
          <div className={styles.greetingLine}></div>
          <h2 className={styles.intro}>Hello, I'm</h2>
        </div>
        <h1 className={styles.name}>Abhijit Hemram</h1>
        <div className={styles.roleContainer}>
          <span className={styles.rolePrefix}>I'm a </span>
          <span ref={typingRef} className={styles.typingText}></span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.info}>
          Passionate about creating beautiful, functional, and user-friendly
          digital experiences.
        </p>
        <div className={styles.btnContainer}>
          <a href="#about" className={styles.aboutBtn}>
            About me{" "}
            <span className={styles.userIcon}>
              <FaUser />
            </span>
          </a>
          <a href="#project" className={styles.projectBtn}>
            Projects{" "}
            <span className={styles.userIcon}>
              <IoEye />
            </span>
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
          <a href="#" className={styles.socialIcon} title="Download Resume">
            <FaDownload />
          </a>
          <a href="#contact" className={styles.socialIcon} title="Contact Me">
            <FaCode />
          </a>
        </div>
      </div>
      <div className={styles.profileImg}>
        <div className={styles.imgWrapper}>
          <img src={profile} alt="profile" />
        </div>
        <div className={styles.profileBg}></div>
      </div>
    </section>
  );
}

export default Hero;
