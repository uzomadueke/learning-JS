//this just adds my initial website layout
import React from 'react';


//this imports the css file that I created
import "./styles.css";

import "./App.css";

import "./MovingElement.css";

//import "./MovingElement.js";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section id="about">
        <h2>About Kennedy Madueke</h2>
        <p>
          I am a software engineer with a strong foundation in computer science principles, dedicated to solving real-world problems through innovative software solutions. 
          Constantly eager to explore new technologies, I thrive in both personal and collaborative projects that push the boundaries of creativity and functionality. 
          My ability to adapt and take initiative has been shaped by hands-on experience, while my strong communication skills ensure clarity in code, documentation, and technical reports. 
          Through my work, I aim to blend technical excellence with creativity, building solutions that are both impactful and engaging.
          </p>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <li>THIS WEBSITE</li>
          <li>SPELLING GAME APP</li>
          <li>AI CAR SIMULATION</li>
          <li>HANGMAN</li>
        </ul>
      </section>
      <footer>
        <p>Contact us at ss.socialstudios@outlook.com</p>
        <p>MADUEKE'S PORTFOLIO. All Right Reserved. Developed by socialstudios.</p>
      </footer>
    </div>
  );
}

export default App;

