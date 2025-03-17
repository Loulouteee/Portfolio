import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Icone Mail" />
          <a href="mailto:loulombardycalafell@gmail.com">loulombardycalafell@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/loulouteee">github.com/loulouteee</a>
        </li>
      </ul>
    </footer>
  );
};
