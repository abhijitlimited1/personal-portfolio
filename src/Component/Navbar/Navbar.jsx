import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const [lines, setLines] = useState(true);

  function handleClick(link) {
    setActiveLink(link);
  }

  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>Abhijit Hemram</h1>
      <div onClick={() => setLines(!lines)} className={styles.line}>
        {lines ? <IoReorderThreeOutline /> : <RxCross1 />}
      </div>
      <ul className={`${styles.links} ${!lines ? styles.show : ""}`}>
        <li
          onClick={() => handleClick("home")}
          className={`${styles.link} ${activeLink === "home" && styles.active}`}
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => handleClick("about")}
          className={`${styles.link} ${
            activeLink === "about" && styles.active
          }`}
        >
          <a href="#about">About me</a>
        </li>
        <li
          onClick={() => handleClick("project")}
          className={`${styles.link} ${
            activeLink === "project" && styles.active
          }`}
        >
          <a href="#project">Project</a>
        </li>
        <li
          onClick={() => handleClick("contact")}
          className={`${styles.link} ${
            activeLink === "contact" && styles.active
          }`}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
