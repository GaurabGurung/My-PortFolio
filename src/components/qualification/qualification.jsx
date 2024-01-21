import React, { useState, useEffect } from "react";
import styles from "./qualification.module.css";
import Lottie from "lottie-react";
import EducationSection from "../education-section/education-section";

import Img1 from "../../assets/hero/Img1.png";
import Img2 from "../../assets/hero/Img2.png";
import Img3 from "../../assets/hero/img3.png";
import monitor from "../../assets/animation/monitor.json";
import light from "../../assets/hero/light3.png";
import lightsOff from "../../assets/hero/lightsOff.png";

import hello from "../../assets/animation/hello.json";
import twinkle from "../../assets/animation/twinkle.json";
import thankyou from "../../assets/animation/thankyou.json";

const Qualification = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isSetOn, setIsSetOn] = useState(false);
  const [heroImg, setHeroImg] = useState(Img1);
  const [lottieAnimation, setLottieAnimation] = useState(monitor);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSwitchClick = () => {
    setIsSetOn(true);
    setIsOn((currentIsOn) => !currentIsOn);
  };

  useEffect(() => {
    if (isSetOn && isOn) {
      setHeroImg(Img3);
      setLottieAnimation(thankyou);

      const timeoutId = setTimeout(() => {
        setHeroImg(isHovered ? Img2 : Img1);
        setLottieAnimation(isHovered ? hello : monitor);
        setIsSetOn(false);
        setIsOn(false);
      }, 4500);

      return () => clearTimeout(timeoutId);
    } else {
      setHeroImg(isHovered ? Img2 : Img1);
      setLottieAnimation(isHovered ? hello : thankyou);
    }
  }, [isSetOn, isOn, isHovered]);

  return (
    <div className={styles.container} id="qualification">
      <div className={styles.block} />
      <div className={styles.lightContainer}>
        <div className={styles.switch} onClick={handleSwitchClick} />
        <img alt="" className={styles.lights} src={isOn ? light : lightsOff} />
      </div>
      {isOn && setIsOn ? (
        <Lottie animationData={thankyou} className={styles.typing} />
      ) : isHovered ? (
        <Lottie animationData={hello} className={` ${styles.hello}`} />
      ) : (
        <Lottie animationData={monitor} className={styles.typing} />
      )}
      <Lottie animationData={twinkle} className={styles.twinkle} />
      <img className={styles.heroImg} src={heroImg} alt="hero_image" />

      <h2 className={styles.title}>
        My <span className={styles.text_highlight}>Qualification</span>
      </h2>
      <div
        className={styles.sectionCotainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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

export default Qualification;
