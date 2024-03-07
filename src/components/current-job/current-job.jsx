import styles from "../current-job/current-job.module.css";
import { motion } from "framer-motion";
const CurrentJob = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      className={styles.container}
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 2 }}
    >
      {/* <div className={styles.historyDetails}> */}
      <h2 className={styles.heading}>
        My Current Job:
        <span className={styles.text_highlight}> ICT Support Officer</span>
      </h2>
      <p className={styles.description}>
        My extensive background as an ICT HelpDesk Officer, has equipped me with
        a unique set of transferable skills that I am confident will make a
        valuable contribution to the field of web development.
      </p>
      <ul className={styles.listItems}>
        <li className={styles.listItem}>
          <h3>Problem-Solving and Technical Proficiency</h3>
        </li>
        <li className={styles.listItem}>
          <h3>Communication and Customer Service</h3>
        </li>
        <li className={styles.listItem}>
          <h3>Time Management and Adaptability</h3>
        </li>
        <li className={styles.listItem}>
          <h3>Attention to Detail and Documentation</h3>
        </li>
        <li className={styles.listItem}>
          <h3>Teamwork and Analytical Thinking</h3>
        </li>
      </ul>
    </motion.div>
  );
};

export default CurrentJob;
