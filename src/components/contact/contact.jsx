import styles from "../contact/contact.module.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubmc9wa",
        "template_up4ynkv",
        form.current,
        "zo_pmvuRXTqPy00-p"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successful");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className={styles.container} id="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
        <div className={styles.name_section}>
          <div className={styles.firstName}>
            <label className={styles.text}>First Name</label>
            <input
              type="text"
              name="first_name"
              required
              placeholder="First name"
            />
          </div>
          <div className={styles.lastName}>
            <label className={styles.text}>Last Name</label>
            <input
              type="text"
              name="last_name"
              required
              placeholder="Last name"
            />
          </div>
        </div>
        <label className={styles.text}>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Email Address"
        />
        <label className={styles.text}>Message</label>
        <textarea
          name="message"
          className={styles.message}
          required
          placeholder="Type your message"
        />
        <input
          type="submit"
          value="Send"
          className={styles.sendBtn}
          placeholder="Type your message"
        />
      </form>
    </section>
  );
};

export default Contact;
