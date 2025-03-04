import React, { useState } from "react";
import "./PopupButton.css";

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  // Toggle pop-up
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Random movement on hover
  const handleHover = () => {
    const randomX = Math.random() * 80 + 10; // Random position between 10% and 90%
    const randomY = Math.random() * 80 + 10;
    setPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  return (
    <div className="popup-container">
      {/* Button with hover movement and click to open popup */}
      <button
        className="hover-button"
        onClick={togglePopup}
        onMouseEnter={handleHover}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          transform: "translate(-50%, -50%)", // Keeps the button centered
        }}
      >
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