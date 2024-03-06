import React from "react";
import styles from "../projects/projects.module.css";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";
import { RiExternalLinkLine } from "@remixicon/react";

const Projects = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className={styles.fullContainer}>
      <h2 className={styles.title}>
        My <span className={styles.text_highlight}>Projects</span>
      </h2>
      <motion.section
        className={styles.container}
        id="projects"
        variants={fadeIn}
        initial="initial"
        transition={{ duration: 1.5 }}
        whileInView="animate"
      >
        {projects.map((project) => {
          return (
            <div className={styles.projects__card}>
              <article className={`${styles.project_info}`} key={project.title}>
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
      </motion.section>
    </div>
  );
};

export default Projects;
