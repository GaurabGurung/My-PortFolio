// ScrollUp.jsx

import React, { useEffect } from "react";
import styles from "../scroll-up/scroll-up.module.css";
import ArrowUp from "../../assets/nav/arrow-up.png";

const ScrollUp = () => {
  const scrollUp = () => {
    const scrollPosition = window.scrollY;
    const arrowElement = document.getElementById("arrow");

    if (scrollPosition >= 350) {
      arrowElement.classList.add(styles.showScroll);
    } else {
      arrowElement.classList.remove(styles.showScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <div id="arrow" className={styles.arrow}>
      <a href="#">
        <img src={ArrowUp} alt="Scroll to Top" />
      </a>
    </div>
  );
};

export default ScrollUp;
