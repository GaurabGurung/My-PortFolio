import styles from "./contact-page.module.css";

const ContactPage = () => {
  return (
    <section className={`${styles.contact} ${styles.section}`}>
      <h2 className={`${styles.section_title}`}>Let's Talk</h2>

      <div
        className={`${styles.contact__page}${styles.container} ${styles.grid}`}
      >
        <form action="" className={`${styles.contact__form} ${styles.grid}`}>
          <div className={`${styles.contact__group} ${styles.grid}`}>
            <div className={`${styles.contact__box}`}>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                placeholder="Write your first name"
                className={`${styles.contact__input}`}
              />
              <label htmlFor="name" className={`${styles.contact__label}`}>
                First Name
              </label>
            </div>

            <div className={`${styles.contact__box}`}>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                placeholder="Write you email address"
                className={`${styles.contact__input}`}
              />
              <label htmlFor="email" className={`${styles.contact__label}`}>
                Email Address
              </label>
            </div>

            <div className={`${styles.contact__box} ${styles.contact__area}`}>
              <textarea
                name="user_message"
                id="message"
                required
                placeholder="Write your message"
              ></textarea>
              <label htmlFor="message" className={`${styles.contact__label}`}>
                Message
              </label>
            </div>

            <p className={styles.contact__message} id="contact-message">
              Message
            </p>
            <button
              type="submit"
              className={`${styles.contact__send} ${styles.button}`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
