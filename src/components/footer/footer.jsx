import styles from "../../components/footer/footer.module.css";
import github from "../../assets/social/github.png";
import linkedin from "../../assets/social/linkedin.png";

const Footer = () => {
  return (
    <div className={styles.wholePage}>
      <div className={styles.footer__container}>
        <a href="/#" className={styles.footer__logo}>
          Gaurab <span className={styles.lastName}>Gurung</span>
        </a>
        <ul className={styles.footer__links}>
          <li>
            <a href="/#qualification" className={styles.footer__link}>
              My Qualification
            </a>
          </li>
          <li>
            <a href="/#experience" className={styles.footer__link}>
              My Skills
            </a>
          </li>
          <li>
            <a href="/#projects" className={styles.footer__link}>
              Projects
            </a>
          </li>
        </ul>

        <div className={styles.footer__social}>
          <a
            href="https://www.linkedin.com/in/gaurab-gurung/"
            target="-blank"
            className={styles.socialLink}
          >
            <img src={linkedin} alt="linkedIn icon" />
          </a>
          <a
            href="https://github.com/GaurabGurung"
            target="-blank"
            className={styles.socialLink}
          >
            <img src={github} alt="github icon" />
          </a>
        </div>
      </div>
      <span className={styles.footer__copy}>
        &#169; Welcome To My Portfolio Website
      </span>
    </div>
  );
};

export default Footer;
