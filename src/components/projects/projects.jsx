import React from "react";
import styles from "../projects/projects.module.css";
import projects from "../../data/projects.json";
import { RiExternalLinkLine } from "@remixicon/react";
import Proj1 from "../../assets/projects/clothing-store.png";
import Proj2 from "../../assets/projects/monsters.png";
import Proj3 from "../../assets/projects/weatherApp.png";

import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className={styles.fullContainer}>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        {projects.map((project) => {
          return (
            <article className={styles.projects}>
              <img
                src={project.imageSrc}
                alt="project image"
                className={styles.projectImg}
              />
              <div>
                <span className={styles.subtitle}>{project.description}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <a href={project.demo} target="_blank">
                  View Demo <RiExternalLinkLine />
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
