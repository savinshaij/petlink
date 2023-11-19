// PetDatingHub.js

import React, { useState } from 'react';
import "./petDhub.css";

const PetDatingHub = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <div>
      <button className="pdh-trigger-button" onClick={togglePopup}>
        Open Pet Popup
      </button>
      <div className={`pdh-popup ${isPopupVisible ? 'active' : ''}`}>
        <span className="pdh-close-button" onClick={togglePopup}>
          X
        </span>
        <p>This is a pop-up for Pet Dating Hub!</p>
      </div>
      <div className={`pdh-overlay ${isPopupVisible ? 'active' : ''}`} onClick={togglePopup}>
        <div className="pdh-overlay-text">Click anywhere or use the X button to close</div>
      </div>
    </div>
  );
};

export default PetDatingHub;
