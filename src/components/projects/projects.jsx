import React from "react";
import styles from "../projects/projects.module.css";
import projects from "../../data/projects.json";
import { RiExternalLinkLine } from "@remixicon/react";
import Proj1 from "../../assets/projects/clothing-store.png";
import Proj2 from "../../assets/projects/monsters.png";
import Proj3 from "../../assets/projects/weatherApp.png";

const Projects = () => {
  return (
    <div className={styles.fullContainer}>
      <h2 className={styles.title}>
        My <span className={styles.text_highlight}>Projects</span>
      </h2>
      <section className={styles.container} id="projects">
        {projects.map((project) => {
          return (
            <div className={styles.hh}>
              <article
                className={`${styles.projects__card}`}
                key={project.title}
              >
                <img
                  src={project.imageSrc}
                  alt="project image"
                  className={styles.projectImg}
                />
                <div className={styles.projects__modal}>
                  <h2 className={styles.project__title}>{project.title}</h2>
                  <span className={styles.subtitle}>{project.description}</span>
                  <a
                    href={project.demo}
                    target="_blank"
                    className={styles.projects__button}
                  >
                    View Demo <RiExternalLinkLine />
                  </a>
                </div>
              </article>
              <h1 className={styles.project_sub}>{project.title}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
