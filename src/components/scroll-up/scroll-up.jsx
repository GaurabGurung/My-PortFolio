import styles from "../scroll-up/scroll-up.module.css";
import ArrowUp from "../../assets/nav/arrow-up.png";
const ScrollUp = () => {
  return (
    <div>
      <a href="" className={styles.arrow}>
        <img src={ArrowUp} alt="" />
      </a>
    </div>
  );
};

export default ScrollUp;
