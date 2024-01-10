import styles from "../projects/projectCard.module.css";
import Arrow from "../../assets/projects/rightArrow.png";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <a href={demo} target="_blank" className={styles.imageLink}>
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <img src={Arrow} className={styles.arrowIcon} />
      </a>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
