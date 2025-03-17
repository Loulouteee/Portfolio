import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { QRCodeCanvas } from "qrcode.react";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, demoType },
}) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRCodeClick = () => {
    setShowQRCode(!showQRCode);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demoType === "download" && (
          <a href={demo} download className={styles.link}>
            Télécharger
          </a>
        )}
        {demoType === "qr" && (
          <a onClick={handleQRCodeClick} className={styles.link}>
            {showQRCode ? "Cacher le QR Code" : "Afficher le QR Code"}
          </a>
        )}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
      {demoType === "qr" && showQRCode && (
        <div className={styles.qrContainer}>
          <QRCodeCanvas value={demo} size={200} className={styles.qrCode} />
          <p className={styles.qrText}>Scannez pour accéder à la démo</p>
        </div>
      )}
    </div>
  );
};
