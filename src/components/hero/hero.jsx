import React from "react";
import HeroImg from "../../assets/hero/hero-1.png";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Max</h1>
        <p className={styles.description}>
          I am a front-end developer. I have done my masters in Computer
          Science. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:gaurabgurung181@gmail.com"
          className={styles.containerBtn}
        >
          Download Resume
        </a>
      </div>
      <img src={HeroImg} alt="Hero image" className={styles.heroImg} />
      <div className={styles.shawdow} />
      <div className={styles.sideColor} />
    </section>
  );
};

export default Hero;
