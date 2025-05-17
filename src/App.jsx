import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import emailjs from "emailjs-com";

function App() {
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  function handleClick(name, email, message) {
    const data = {
      name,
      email,
      message,
    };

    // Show loading notification
    setNotification({
      show: true,
      type: "loading",
      message: "Sending your message...",
    });

    // Sending email via EmailJS
    emailjs
      .send("service_5xzbgbj", "template_ir685i8", data, "nMtN869hzk9bgAhaC")
      .then(
        (result) => {
          // Show success notification
          setNotification({
            show: true,
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });

          // Hide notification after 5 seconds
          setTimeout(() => {
            setNotification({ show: false, type: "", message: "" });
          }, 5000);
        },
        (error) => {
          // Show error notification
          setNotification({
            show: true,
            type: "error",
            message: "An error occurred, please try again later.",
          });

          // Hide notification after 5 seconds
          setTimeout(() => {
            setNotification({ show: false, type: "", message: "" });
          }, 5000);
        }
      );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact handleClick={handleClick} notification={notification} />
      <Footer />

      {/* Global Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <button
            className="close-notification"
            onClick={() =>
              setNotification({ show: false, type: "", message: "" })
            }
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default App;
