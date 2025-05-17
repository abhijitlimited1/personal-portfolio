import React from "react";
import styles from "./About.module.css";
import userImage from "../../assets/avatar1.png";

function About() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 85 },
    { name: "Python", level: 70 },
    { name: "Django", level: 65 },
    { name: "SQL/MySQL", level: 75 },
  ];

  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutHeader}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutImageContainer}>
          <img src={userImage} alt="Profile" className={styles.aboutImage} />
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.aboutInfo}>
          <h2 className={styles.aboutSubtitle}>Full Stack Developer</h2>

          <p className={styles.info}>
            I am a passionate and dedicated Full Stack Developer with a strong
            foundation in both frontend and backend technologies. I create
            responsive, user-friendly interfaces and robust backend systems.
          </p>

          <p className={styles.info}>
            As a fresher in the industry, I am eager to apply my knowledge to
            real-world projects, continuously learn new technologies, and
            contribute to innovative solutions. I am ready to collaborate with
            teams or work independently to deliver efficient and scalable
            applications that solve meaningful problems.
          </p>

          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>My Skills</h3>
            <div className={styles.skillBars}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className={styles.contactButton}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
