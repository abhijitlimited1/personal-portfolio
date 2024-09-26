import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import emailjs from "emailjs-com";

function App() {
  function handleClick(name, email, message) {
    const data = {
      name,
      email,
      message,
    };

    // Sending email via EmailJS

    emailjs
      .send("service_5xzbgbj", "template_ir685i8", data, "nMtN869hzk9bgAhaC")
      .then(
        (result) => {},
        (error) => {
          alert("An error occurred, please try again later");
        }
      );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact handleClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;
