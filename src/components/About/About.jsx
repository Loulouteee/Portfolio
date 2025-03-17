import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À Propos</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sin.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Spécialité</h3>
              <p>
                J'ai fais un BAC STI2D, avec spécificité SIN, ce qui m'a permis de mieux ouvrir les yeux sur l'informatique et de me rendre compte que c'est ce que je voulais vraiment faire.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>L'informatique et moi</h3>
              <p>
                Je fais du développement informatique depuis mon stage de 3eme, où je me suis rendu compte que c'est dans ce domaine que je voulais continuer mes études.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
