import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import {
  BagSimple,
  Download,
  TwitterLogo,
  LinkedinLogo,
  Envelope,
  GithubLogo,
} from "phosphor-react";
import Resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>You Can Contact Me Here</div>
      <div className={styles.content}>
        <div className={styles.social}>
          <p className={styles.socialText}>
            Hey, you can find me on these{" "}
            <span style={{ color: "#6666ff" }}>social media</span> platforms.
            Additionally, you can reach me directly through the{" "}
            <span style={{ color: "#6666ff" }}>contact form.</span>
          </p>
          <div className={styles.socialButtons}>
            <a className="btn btn-outline-light" href={Resume} download>
              <Download size={16} className="text-light" /> Download Resume
            </a>
           
            <a
              className="btn btn-outline-primary"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogo size={16} className="text-primary" weight="fill" />{" "}
              Twitter
            </a>
            <a
              className="btn btn-outline-info"
              href="https://www.linkedin.com/in/shatakshi-saxena-a3863a221/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo size={16} className="text-info" weight="thin" />{" "}
              Linkedin
            </a>
            <a
              className="btn btn-outline-danger"
              href="https://github.com/Shatakshi127"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={16} className="text-danger" weight="thin" />{" "}
              Github
            </a>
            <a
              className="btn btn-outline-warning"
              href="mailto:shatakshi3102@gmail.com"
            >
              <Envelope size={16} className="text-warning" weight="thin" />{" "}
              Email
            </a>
          </div>
        </div>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
