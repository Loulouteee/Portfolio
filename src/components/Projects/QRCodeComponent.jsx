import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export const QRCodeComponent = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleButtonClick = () => {
    setShowQRCode(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button 
        onClick={handleButtonClick} 
        style={{
          padding: "10px 20px", 
          backgroundColor: "#576cbc", 
          color: "white", 
          border: "none", 
          borderRadius: "100px",
          cursor: "pointer",
          fontSize: "30px"
        }}
      >
        Afficher le QR code
      </button>

      {showQRCode && (
        <div style={{ marginTop: "20px" }}>
          <QRCodeCanvas 
            value="https://raw.githubusercontent.com/loulouteee/Portfolio/master/assets/projects/Ecole_primaire.apk" 
            size={200} 
            bgColor="#04152d" // Couleur de fond : jaune clair
            fgColor="#FFFFFF" // Couleur des motifs : orange vif
          />
          <p>Scannez ce QR code pour télécharger l'application !</p>
        </div>
      )}
    </div>
  );
};