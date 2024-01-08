// Projects.js

import React from "react";
import styles from "../projects/projects.module.css";
import Proj1 from "../../assets/projects/clothing-store.png";
import Proj2 from "../../assets/projects/monsters.png";
import Proj3 from "../../assets/projects/weatherApp.png";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.project_container}>
        <h1 className={styles.title}>Recent Project</h1>
        <div>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj1} alt="" className={styles.projImg} />

              <h2>Online Clothing Website</h2>
              <span className={styles.subtitle}></span>
            </a>
          </article>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj2} alt="" className={styles.projImg} />

              <h2>Online Clothing Website</h2>
              <span className={styles.subtitle}></span>
            </a>
          </article>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj3} alt="" className={styles.projImg} />

              <h2>Online Clothing Website</h2>
              <span className={styles.subtitle}></span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
