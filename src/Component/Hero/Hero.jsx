import React from "react";
import styles from "./Hero.module.css";
import profile from "../../assets/avatar1.png";
import { FaUser } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

function Hero(){
    return <section id="home" className={styles.hero}>
        <div className={styles.mainInfo}>
            <h2 className={styles.intro}>Hello, i'm</h2>
            <h1 className={styles.name}>Abhijit Hemram</h1>
            <p className={styles.info}>Freelance UI developer,Fullstack developer.Frontend developer,<br />Backend developer</p>
            <a href="#about" className={styles.aboutBtn}>About me <span className={styles.userIcon}><FaUser /></span></a>
            <a href="#project" className={styles.projectBtn}>Project<span className={styles.userIcon}><IoEye /></span></a>
        </div>
        <div className={styles.profileImg}>
            <img src={profile} alt="profile" />
        </div>
    </section>
}

export default Hero;