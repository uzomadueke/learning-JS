import React, { useState } from "react";
import "./PopupButton.css"; // Import the CSS file for styling




const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

   // initiates the radnom movment 
 
   const handleHover = () => {
    let randomX = Math.floor(Math.random() * 10) - 5; // -5px to +5px
    let randomY = Math.floor(Math.random() * 10) - 5;
    setPosition({ x: randomX, y: randomY });
    
  const togglePopup = () => {
    setIsOpen(!isOpen);

   
  };
};

  return (
    <div className="popup-container"

    // calls movement function when mouse enters
      onMouseEnter={handleHover}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      >
   
      {/* Button with hover and click interaction */}
      <button className="hover-button" onClick={togglePopup}>
        My Background
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