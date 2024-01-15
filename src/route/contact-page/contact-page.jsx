import styles from "./contact-page.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../components/footer/footer";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const contactMessage = document.getElementById("contact-message");
    const formField = document.getElementById("contact-form");

    emailjs
      .sendForm(
        "service_ubmc9wa",
        "template_up4ynkv",
        form.current,
        "zo_pmvuRXTqPy00-p"
      )
      .then(
        () => {
          contactMessage.textContent = "Message sent succesfully ✅";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
          formField.reset();
        },
        (error) => {
          contactMessage.textContent = "Message not sent (service error) ❌";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
          formField.reset();
        }
      );
  };
  return (
    <>
      <div className={styles.container}>
        <section className={`${styles.contact} ${styles.section}`}>
          <h2 className={`${styles.section_title}`}>
            Let's Talk <br /> for an Interview
          </h2>

          <div className={`${styles.contact__page}`}>
            <form
              id="contact-form"
              action=""
              className={`${styles.contact__form}`}
              ref={form}
              onSubmit={sendEmail}
            >
              <div className={`${styles.contact__group}`}>
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

                <div className={`${styles.contact__box} `}>
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
              </div>
              <div className={`${styles.contact__box} ${styles.contact__area}`}>
                <textarea
                  name="message"
                  required
                  placeholder="Type your message"
                  className={styles.contact__input}
                />
                <label className={`${styles.contact__label}`}>Message</label>
              </div>
              <input
                type="submit"
                value="Send Message"
                className={`${styles.contact__send} ${styles.button}`}
                placeholder="Type your message"
              />
              <p className={styles.contact__message} id="contact-message"></p>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
