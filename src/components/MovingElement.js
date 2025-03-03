import React, { useState } from "react";
import "./MovingElement.css"; // Create and import a CSS file

const MovingElement = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    let randomX = Math.floor(Math.random() * 10) - 5; // -5px to +5px
    let randomY = Math.floor(Math.random() * 10) - 5;
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div
      className="moving-element"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseEnter={handleHover}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      Hover Me
    </div>
  );
};

export default MovingElement;