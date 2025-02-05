import React from "react";
import "./index.css";

const Grid = ({ guesses, solution }) => {
  const getColor = (letter, index) => {
    if (solution[index] === letter) return "green";
    if (solution.includes(letter)) return "yellow";
    return "gray";
  };

  return (
    <div className="grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="row">
          {Array.from({ length: 5 }).map((_, j) => {
            const letter = guesses[i]?.[j] || "";
            return (
              <span key={j} className={`letter ${getColor(letter, j)} animate`}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;