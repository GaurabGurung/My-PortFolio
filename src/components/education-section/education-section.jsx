import styles from "./education-section.module.css";

const EducationSection = () => {
  return (
    <>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.itemItext}>
            <h3>Zero To Mastery Academy</h3>
            <p>Complete Web Developer Complete</p>
            <p>React Developer Course JavaScript: The advanced Concept</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <div className={styles.itemItext}>
            <h3>Master of Computer Science</h3>
            <p>Melbourne Institute of Technology, Melbourne</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.itemItext}>
            <h3>Master of Computer Science</h3>
            <p>Melbourne Institute of Technology, Melbourne</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default EducationSection;
