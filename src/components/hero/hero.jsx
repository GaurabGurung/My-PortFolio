import React from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.css";

import HeroImg from "../../assets/hero/hero-1.png";
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";

export const Hero = () => {
  const fadeInFromTop = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const fadeInFromBottom = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <section className={styles.container}>
        <motion.div
          className={styles.content}
          variants={fadeInFromTop}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 2 }}
        >
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
            href="/assets/resume/gaurab_resume.pdf"
            download="gaurab_resume.pdf"
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
              <RiLinkedinBoxFill size={30} color="#68468a" />
            </a>
            <a
              href="https://github.com/GaurabGurung"
              target="-blank"
              className={styles.socialLink}
            >
              <RiGithubFill size={30} color="#68468a" />
            </a>
          </div>
        </motion.div>
        <motion.img src={HeroImg} alt="Hero image" className={styles.heroImg} />
        <div className={styles.shawdow} />
        <div className={styles.sideColor} />
        <div className={styles.bottomLine} />
      </section>
    </>
  );
};

export default Hero;
