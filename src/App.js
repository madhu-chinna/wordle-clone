import React, { useState, useEffect } from "react";
import Wordle from "./components/Wordle/";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="app">
      <header className="header-conatiner">
        <h1>Wordle Clone</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <p className="instruction">Please enter your guessing word</p>
      </header>
      <Wordle />
    </div>
  );
}

export default App;
