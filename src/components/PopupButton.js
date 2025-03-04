import React, { useState } from "react";
import "./PopupButton.css"; // Import the CSS file for styling

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      {/* Button with hover and click interaction */}
      <button className="hover-button" onClick={togglePopup}>
        Click Me
      </button>

      {/* Pop-up Modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Pop-up Content</h2>
            <p>This is your pop-up message.</p>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;