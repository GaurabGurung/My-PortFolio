import styles from "../../components/footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <a href="/" className={styles.footer__logo}>
        {" "}
        Gaurab Gurung
      </a>
    </div>
  );
};

export default Footer;
