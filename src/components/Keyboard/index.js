import React from "react";
import "./index.css";

const Keyboard = ({ onKeyPress }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button key={letter} onClick={() => onKeyPress(letter.toLowerCase())}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
