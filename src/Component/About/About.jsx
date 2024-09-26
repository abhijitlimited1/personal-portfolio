import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.title}>About me:</h1>
      <p className={styles.info}>
        I am a passionate and dedicated Full Stack Developer with a strong
        foundation in both frontend and backend technologies. My skill set
        includes <span className={styles.skill}>HTML</span>,{" "}
        <span className={styles.skill}>CSS</span>,{" "}
        <span className={styles.skill}>JavaScript</span>,{" "}
        <span className={styles.skill}>Bootstrap</span>, and{" "}
        <span className={styles.skill}>React</span> for creating responsive,
        user-friendly interfaces, alongside{" "}
        <span className={styles.skill}>Python</span>,{" "}
        <span className={styles.skill}>Django</span>, and
        <span className={styles.skill}>Django Rest Framework</span> for building
        robust backend systems. I have hands-on experience with{" "}
        <span className={styles.skill}>SQL</span> and{" "}
        <span className={styles.skill}>MySQL</span>, allowing me to effectively
        manage and query databases to support dynamic applications. As a fresher
        in the industry, I am eager to apply my knowledge to real-world
        projects, continuously learn new technologies, and contribute to
        innovative solutions. I am ready to collaborate with teams or work
        independently to deliver efficient and scalable applications that solve
        meaningful problems.
      </p>
    </section>
  );
}

export default About;
