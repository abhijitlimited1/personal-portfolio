import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [lines, setLines] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Set active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update navbar style on scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Get all sections
      const sections = ["home", "about", "project", "contact"];

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick(link) {
    setActiveLink(link);
    setLines(true); // Close mobile menu when clicking a link
  }

  return (
    <nav className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Abhijit Hemram</h1>
      </div>
      <div onClick={() => setLines(!lines)} className={styles.line}>
        {lines ? <IoReorderThreeOutline /> : <RxCross1 />}
      </div>
      <ul className={`${styles.links} ${!lines ? styles.show : ""}`}>
        <li
          onClick={() => handleClick("home")}
          className={`${styles.link} ${activeLink === "home" && styles.active}`}
        >
          <a href="#home">
            <FaHome className={styles.navIcon} /> Home
          </a>
        </li>
        <li
          onClick={() => handleClick("about")}
          className={`${styles.link} ${
            activeLink === "about" && styles.active
          }`}
        >
          <a href="#about">
            <FaUser className={styles.navIcon} /> About me
          </a>
        </li>
        <li
          onClick={() => handleClick("project")}
          className={`${styles.link} ${
            activeLink === "project" && styles.active
          }`}
        >
          <a href="#project">
            <FaProjectDiagram className={styles.navIcon} /> Projects
          </a>
        </li>
        <li
          onClick={() => handleClick("contact")}
          className={`${styles.link} ${
            activeLink === "contact" && styles.active
          }`}
        >
          <a href="#contact">
            <FaEnvelope className={styles.navIcon} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
