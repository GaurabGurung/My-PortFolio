import React from "react";
import HeroImg from "../../assets/hero/hero-1.png";
import styles from "./Hero.module.css";
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";
// import github from "../../assets/social/github.png";
// import linkedin from "../../assets/social/linkedin.png";
export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Hello, <span className={styles.textColor}> I'm</span>
            <br />
            <span className={styles.myName}>Gaurab Gurung</span>
          </h3>
          <p className={styles.description}>
            I am a front-end developer. I have done my masters in Computer
            Science. Reach out if you'd like to learn more!
          </p>
          <a
            href="mailto:gaurabgurung181@gmail.com"
            className={styles.containerBtn}
          >
            Download CV
          </a>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/gaurab-gurung/"
              target="-blank"
              className={styles.socialLink}
            >
              <RiLinkedinBoxFill size={30} color="teal" />
            </a>
            <a
              href="https://github.com/GaurabGurung"
              target="-blank"
              className={styles.socialLink}
            >
              <RiGithubFill size={30} color="teal" />
            </a>
          </div>
        </div>
        <img src={HeroImg} alt="Hero image" className={styles.heroImg} />
        <div className={styles.shawdow} />
        <div className={styles.sideColor} />
        <div className={styles.bottomLine} />
      </section>
    </>
  );
};

export default Hero;
