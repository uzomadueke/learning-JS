import React, { useState } from "react";
import "./PopupButton.css";

const buttons = [
  {
    id: "get-to-know-me",
    label: "Get To Know Me",
    content: (
      <>
        <p>
          I am a software engineer with a strong foundation in computer science principles, dedicated to solving real-world problems through innovative software solutions. 
          Constantly eager to explore new technologies, I thrive in both personal and collaborative projects that push the boundaries of creativity and functionality. 
          My ability to adapt and take initiative has been shaped by hands-on experience, while my strong communication skills ensure clarity in code, documentation, and technical reports. 
          Through my work, I aim to blend technical excellence with creativity, building solutions that are both impactful and engaging.
        </p>
      </>
    ),
  },
  {
    id: "proficiencies",
    label: "Proficiencies",
    content: (
      <>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Swift (iOS Development)</li>
          <li>Node.js & Express</li>
        </ul>
      </>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    content: (
      <> 
        <h3>PORTFOLIO WEBSITE</h3>
        <p>A portfolio showcasing my work and skills built with ReactJS, HTML & CSS.</p>

        <h3>SPELLING DEVELOPMENT APP</h3>
        <p>An iOS app built with Swift to help users develop their spelling ability.</p>

        <h3>AI CAR SIMULATION</h3>
        <p>A NetLogo simulation to find the fastest ruote in a city.</p>

        <h3>HANGMAN GAME</h3>
        <p>A fun game built using Python.</p>
      </>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    content: (
      <>
        <h3>Software Engineer Intern - Ankur Solutions</h3>
        <p>Worked on backend services and frontend interfaces.</p>

        <h3>Founder - AVERA</h3>
        <p>Created and built a skateboarding-inspired clothing brand.</p>
      </>
    ),
  },
  {
    id: "education",
    label: "Education",
    content: (
      <>
        <h3>University of Hertfordshire, UK.</h3>
        <p>BSc in Computer Science (Software Engineering).</p> 
        <p>Upper Second Class. (Sep, 2018 - Jul, 2022)</p>
      </>
    ),
  },
  {
    id: "contact",
    label: "Contact Me",
    content: (
      <>
        <p>Email: <a href="mailto:uzo_madueke@yahoo.com">uzo_madueke@yahoo.com</a></p>
        <p>GitHub: <a href="https://github.com/uzomadueke" target="_blank" rel="noopener noreferrer">github.com/uzomadueke</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/uzomadueke" target="_blank" rel="noopener noreferrer">linkedin.com/in/uzomadueke</a></p>
      </>
    ),
  },
];

const PopupButton = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Toggle pop-up
  const togglePopup = (id) => {
    setActivePopup(activePopup === id ? null : id);
  };

  return (
    <div className="popup-buttons-container">
      
    

      {buttons.map((btn) => (
        <div key={btn.id}>
          {/* Button that grows on hover */}
          <button className="hover-button" onClick={() => togglePopup(btn.id)}>
            {btn.label}
          </button>

          {/* Pop-up Modal */}
          {activePopup === btn.id && (
            <div className="popup-overlay" onClick={() => togglePopup(null)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>{btn.label}</h2>
                <p>{btn.content}</p>
                <button className="close-button" onClick={() => togglePopup(null)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PopupButton;


  /* code for randomizing movement */ 
 // const [position, setPosition] = useState({ top: "0.5%", left: "0.5%", bottom: "2%", right: "2%"});

  // Random movement on hover 
  /* code for randomizing movement  
  /const handleHover = () => {
    const randomX = Math.random() * 1 + 1; // Random position between 10% and 90%
    const randomY = Math.random() * 1 + 1;
    setPosition({ top: `${randomY}%`, left: `${randomX}%` });
  }; 
  
   ** code below should be under 'onclick'
   ^
  onMouseEnter={handleHover}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          transform: "translate(-0.5%, -0.5%)", // Keeps the button centered
        }}
      >
  
  */
