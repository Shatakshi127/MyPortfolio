import React from "react";
import styles from "./Landing.module.css";
import { HandWaving, GithubLogo, FolderNotchOpen } from "phosphor-react";
import ReactRotatingText from "react-rotating-text";
import Hero from "../assets/hero.jpg";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleText}>
          !Hola Amigos <HandWaving size={48} color="#6666ff" />
          ,I am Shatakshi Saxena, 
          <ReactRotatingText
            items={[
              " Pre Final Student",
              " Frontend Developer",
              " AI/ML Enthusiast",
              " Blockchain Enthusiast"
            ]}
            color="#6666ff"
          />
          .
        </div>
      </div>
      <div className={styles.hero}>
        <img src={Hero} alt="hero" />
        <div className={styles.content}>
          <div className={styles.about}>
          An optimistic, affable, exuberant, and self-motivated student with excellent organizational skills and a good eye for detail. I am a go-getter and always thrive to achieve the highest standard possible at any task by studying concepts and applying them with clarity in my thought process.
          </div>
          <div className={styles.activity}>
            {/* <button className="btn btn-outline-danger">
              <Download size={16} color="#dc3545" /> Download Resume
            </button> */}
            <a
              className="btn btn-outline-success"
              href="https://github.com/Shatakshi127"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={16} color="#198754" />
              Visit Github
            </a>
            <a className="btn btn-outline-warning" href="#project">
              <FolderNotchOpen size={16} color="#ffc107" /> View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
