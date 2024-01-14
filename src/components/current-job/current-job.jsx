import styles from "../current-job/current-job.module.css";

const CurrentJob = () => {
  return (
    <div>
      <ul className={styles.history}>
        <div className={styles.historyDetails}>
          <h2 className={styles.heading}>
            My Current Job: ICT Helpdesk Support
          </h2>
          <p>
            My extensive background as an ICT HelpDesk Officer, has equipped me
            with a unique set of transferable skills that I am confident will
            make a valuable contribution to the field of web development.
          </p>
          <li className={styles.historyItem}>
            <h3>Problem-Solving and Technical Proficiency</h3>
          </li>
          <li className={styles.historyItem}>
            <h3>Communication and Customer Service</h3>
          </li>
          <li className={styles.historyItem}>
            <h3>Time Management and Adaptability</h3>
          </li>
          <li className={styles.historyItem}>
            <h3>Attention to Detail and Documentation</h3>
          </li>
          <li className={styles.historyItem}>
            <h3>Teamwork and Analytical Thinking</h3>
          </li>
        </div>
      </ul>
      <div className={styles.block} />
    </div>
  );
};

export default CurrentJob;
