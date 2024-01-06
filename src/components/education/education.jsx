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
    <section className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleClick}
        onMouseUp={handleClickRelease}
        onMouseOut={handleClickRelease}
      >
        <img
          className={styles.heroImg}
          src={isClicked ? Img3 : isHovered ? Img2 : Img1}
          alt="hero_image"
        />
        <p className={styles.clickMeText}>Click me</p>
        <EducationSection />
      </div>
    </section>
  );
};

export default Education;
