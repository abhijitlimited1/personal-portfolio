import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { TiSocialLinkedin } from "react-icons/ti";

function Contact({ handleClick }) {
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  const [showText, setShowText] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleClick(name.current.value, email.current.value, message.current.value);
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";

    // show the text
    setShowText(true);

    // hide the text

    setTimeout(() => {
      setShowText(false);
    }, 3000);
  }

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactInfo}>
        <h1 className={styles.title}>Connect with me:</h1>
        <p className={styles.info}>Satisfied with me?Please contact me</p>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          className={styles.icon}
        >
          <TiSocialLinkedin />
        </a>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.header}>Contact me,let's make magic together</h1>
        <input ref={name} type="text" placeholder="Name" name="name" required />
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          rows="3"
          placeholder="Message"
          cols="45"
          className={styles.message}
          ref={message}
          required
        ></textarea>
        {showText ? (
          <h3 className={styles.success}>Message Send Successfully</h3>
        ) : (
          ""
        )}
        <input className={styles.btn} type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
