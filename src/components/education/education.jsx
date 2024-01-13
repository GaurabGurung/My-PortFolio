import React, { useState } from "react";
import styles from "../education/education.module.css";
import Img1 from "../../assets/hero/Img1.png";
import Img2 from "../../assets/hero/Img2.png";
import Img3 from "../../assets/hero/Img3.png";
import EducationSection from "../education-section/education-section";

const Education = () => {
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
    <div className={styles.container} id="education">
      <img
        className={styles.heroImg}
        src={isClicked ? Img3 : isHovered ? Img2 : Img1}
        alt="hero_image"
      />
      <h2 className={styles.title}>
        My Educational <br /> Background
      </h2>
      <div className={styles.sectionCotainer}>
        <section className={styles.section}>
          <div
            className={styles.content}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleClick}
            onMouseUp={handleClickRelease}
            onMouseOut={handleClickRelease}
          >
            <EducationSection />
          </div>
        </section>
      </div>
      <div className={styles.block} />
    </div>
  );
};

export default Education;
