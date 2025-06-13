import React, { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { TiSocialLinkedin } from "react-icons/ti";
import {
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
  FaComments,
  FaUserAlt,
  FaRegClock,
} from "react-icons/fa";

function Contact({ handleClick, notification }) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const formRef = useRef(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset form after successful submission
  useEffect(() => {
    if (notification?.type === "success") {
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    } else if (notification?.type === "error") {
      setIsSubmitting(false);
    }
  }, [notification]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    // Call the parent component's handleClick function
    handleClick(formState.name, formState.email, formState.message);
  }

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactHeader}>
        <h1 className={styles.title}>Get In Touch</h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Let's collaborate on your next project
        </p>
      </div>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <FaRegClock />
            </div>
            <h3>Response Time</h3>
            <p>Within 24-48 hours</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <FaComments />
            </div>
            <h3>Communication</h3>
            <p>Clear & professional</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <FaUserAlt />
            </div>
            <h3>Availability</h3>
            <p>Open to new projects</p>
          </div>

          <div className={styles.connectSection}>
            <h3 className={styles.connectTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <TiSocialLinkedin />
              </a>

              <a
                href="https://github.com/abhijitlimited1"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:abhijitlimited1@gmail.com"
                className={styles.socialIcon}
                aria-label="Email Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <h2 className={styles.header}>Send Me a Message</h2>

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                ref={nameRef}
                type="text"
                placeholder="Your Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or inquiry"
                className={styles.message}
                ref={messageRef}
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              className={styles.btn}
              type="submit"
              disabled={isSubmitting || notification?.type === "loading"}
            >
              {isSubmitting ? (
                <span className={styles.btnLoading}>Sending...</span>
              ) : (
                <>
                  Send Message <FaPaperPlane className={styles.btnIcon} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
