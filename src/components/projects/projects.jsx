import React from "react";
import styles from "../projects/projects.module.css";
import projects from "../../data/projects.json";

import Proj1 from "../../assets/projects/clothing-store.png";
import Proj2 from "../../assets/projects/monsters.png";
import Proj3 from "../../assets/projects/weatherApp.png";

import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className={styles.fullContainer}>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
