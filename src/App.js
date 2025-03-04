// import MovingElement from "./components/MovingElement";
//this just adds my initial website layout
import React from 'react';
import PopupButton from './components/PopupButton';
import Footer from "./components/Footer"; //ensure correct path

//this imports the css file that I created
import "./styles.css";
import "./App.css";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        {/* Your other content here */}
        <PopupButton />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default App;
