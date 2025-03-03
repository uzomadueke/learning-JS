//this just adds my initial website layout
import React from 'react';


//this imports the css file that I created
import "./styles.css";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>This is a brief introduction about yourself.</p>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </section>
      <footer>
        <p>Contact me at email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
