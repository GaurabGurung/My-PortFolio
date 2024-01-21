import styles from "../skills/skills.module.css";
import { animate, motion } from "framer-motion";
import skills from "../../data/skills.json";
import CurrentJob from "../current-job/current-job";

export const Skills = () => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className={styles.full} id="experience">
        <h2 className={styles.title}>
          My <span className={styles.highlight}>Skills</span>
        </h2>
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.skills}>
              {skills.map((skill, id) => {
                return (
                  <motion.div
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    transition={{ duration: 1.5 }}
                    whileInView="animate"
                    key={id}
                    className={styles.skill}
                  >
                    <div className={styles.skillImageContainer}>
                      <img src={skill.imageSrc} alt={skill.title} />
                    </div>
                    <p className={styles.toolTitle}>{skill.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <CurrentJob />
        {/* <div className={styles.block} /> */}
        <div className={styles.block} />
      </div>
    </>
  );
};

export default Skills;
