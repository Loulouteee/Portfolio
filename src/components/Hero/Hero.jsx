import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bonjour, je suis Lou</h1>
        <p className={styles.description}>
          Je fais du développement depuis 4 ans, c'est devenu pour moi une passion.
        </p>
        <a href="mailto:loulombardycalafell@gmail.com" className={styles.contactBtn}>
          Contactez Moi
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
