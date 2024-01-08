// Projects.js

import React from "react";
import styles from "../projects/projects.module.css";
import Proj1 from "../../assets/projects/clothing-store.png";
import Proj2 from "../../assets/projects/monsters.png";
import Proj3 from "../../assets/projects/weatherApp.png";
import Arrow from "../../assets/projects/rightArrow.png";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.project_container}>
        <h1 className={styles.title}>Recent Project</h1>
        <div className={styles.projects}>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj1} alt="" className={styles.projImg} />
              <img src={Arrow} className={styles.icon} />
            </a>
            <i className="ri-arrow-right-circle-line"></i>
            <h2>Online Clothing Website</h2>
            <span className={styles.subtitle}> Website Design</span>
          </article>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj2} alt="" className={styles.projImg} />
              <img src={Arrow} className={styles.icon} />
            </a>
            <h2>Monster Rolodex</h2>
            <span className={styles.subtitle}> Build with JS React</span>
          </article>
          <article className={styles.project_article}>
            <a href="#" className={styles.work_link}>
              <img src={Proj3} alt="" className={styles.projImg} />
              <i class="ri-arrow-right-circle-line" className={styles.icon}></i>
              <img src={Arrow} className={styles.icon} />
            </a>
            <h2>Weather App</h2>
            <span className={styles.subtitle}>Searching current weather</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
