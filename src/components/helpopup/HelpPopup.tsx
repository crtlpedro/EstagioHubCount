import React, { useState } from "react";
import "./HelpPopup.css"

interface IHelpPopupProps {
  id: number;
  description: string;
}

const HelpPopup: React.FC<IHelpPopupProps> = ({description }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <img
        src="../ajuda.png"
        alt="botão de ajuda"
        className="help"
        onClick={() => {
          setShowPopup(true);
        }}
      />
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <p className="popup-message">{description}</p>
            <button
              className="popup-button"
              onClick={() => setShowPopup(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpPopup;
