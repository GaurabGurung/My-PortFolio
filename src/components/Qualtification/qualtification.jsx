import React, { useState } from "react";
import styles from "./qualtification.module.css";
import Img1 from "../../assets/hero/Img1.png";
import Img2 from "../../assets/hero/Img2.png";
import Img3 from "../../assets/hero/Img3.png";
import lignts from "../../assets/hero/light3.png";
import EducationSection from "../education-section/education-section";

const Qualtification = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClickRelease = () => {
    setIsClicked(false);
  };

  return (
    <div className={styles.container} id="qualification">
      <div className={styles.block} />
      <img src={lignts} className={styles.lights} />
      <img
        className={styles.heroImg}
        src={isClicked ? Img3 : isHovered ? Img2 : Img1}
        alt="hero_image"
      />
      <h2 className={styles.title}>
        My <span className={styles.text_highlight}>Qualtification</span>
      </h2>
      <div
        className={styles.sectionCotainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleClick}
        onMouseUp={handleClickRelease}
        onMouseOut={handleClickRelease}
      >
        <section className={styles.section}>
          <div className={styles.content}>
            <EducationSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Qualtification;
