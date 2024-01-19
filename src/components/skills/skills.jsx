import styles from "../skills/skills.module.css";

import skills from "../../data/skills.json";
import CurrentJob from "../current-job/current-job";

export const Skills = () => {
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
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={skill.imageSrc} alt={skill.title} />
                    </div>
                    <p className={styles.toolTitle}>{skill.title}</p>
                  </div>
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
