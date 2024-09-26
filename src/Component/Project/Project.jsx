import React from "react";
import styles from "./Project.module.css";
import { data } from "../../data/data";

function Project() {
  return (
    <section id="project" className={styles.container}>
      <h1 className={styles.title}>Featured projects:</h1>
      <p className={styles.info}>
        I have worked on many projects over the course of being a Web
        Developeer,here are a few of my projects
      </p>
      <div className={styles.projects}>
        {data && data.length === 0 ? (
          <h1 className={styles.isProject}>Projects are Coming Soon</h1>
        ) : (
          data.map((items, index) => {
            return (
              <div className={styles.project} key={index}>
                <img
                  src={items.projectImg}
                  alt={items.projectName}
                  className={styles.image}
                />
                <h1 className={styles.projectTitle}>{items.projectName}</h1>
                <p className={styles.description}>{items.description}</p>
                <a className={styles.view} href="#" target="_blank">
                  View Live
                </a>
                <a className={styles.source} href="#" target="_blank">
                  Github Repo
                </a>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Project;
