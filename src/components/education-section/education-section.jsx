import styles from "./education-section.module.css";
import WebDevIcon from "../../assets/education-icon/webDevIcon.png";
import GraduationIcon from "../../assets/education-icon/degreeIcon.png";
import PyIcon from "../../assets/education-icon/py.png";

const EducationSection = () => {
  return (
    <>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img
            src={WebDevIcon}
            alt="WebDev-icon"
            className={styles.webDevIcon}
          />
          <div className={styles.itemItext}>
            <h3>Zero To Mastery Academy</h3>
            <p>Complete Web Developer Complete</p>
            <p>JavaScript: The advanced Concept</p>
            <p>React Developer Course JavaScript: The advanced Concept</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img
            src={PyIcon}
            alt="Profeesion_year_icon"
            className={styles.pyIcon}
          />
          <div className={styles.itemText}>
            <h3>IT Professional Year</h3>
            <p>Performance Education, Melbourne City</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img
            src={GraduationIcon}
            alt="degree_icon"
            className={styles.degree}
          />
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
