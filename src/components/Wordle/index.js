import React, { useState } from "react";
import Grid from "../Grid/";
// import Keyboard from "../Keyboard/";
import Message from "../Message/";
import "./index.css";

const words = ["apple", "table", "chair", "brick", "grape"];

const Wordle = () => {
  const [solution,setSolution] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("playing");
  const [shake, setShake] = useState(false);


  const handleGuess = () => {
    
    if (input.length !== 5) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    if (guesses.length >= 6) return;
    console.log('solution---',solution)
    if (input === solution) {
      setStatus("won");
    } else if (guesses.length === 5) {
      setStatus("lost");
    }

    setGuesses([...guesses, input]);
    setInput("");
  };

  const handleRestart = () => {
    setSolution(words[Math.floor(Math.random() * words.length)])
    setGuesses([]);
    setInput("");
    setStatus("playing");
  };

  return (
    <div className="wordle-container">
      <Grid guesses={guesses} solution={solution} />
      
      <input
        type="text"
        className={`user-input ${shake ? "shake" : ""}`}
        value={input}
        maxLength={5}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
        onKeyDown={(e) => e.key === "Enter" && handleGuess()}
        placeholder="Enter a 5-letter word"
      />
      <button className="space-left" onClick={handleGuess}>Submit</button>
      
      {status !== "playing" && <Message status={status} onRestart={handleRestart} />}
    </div>
  );
};

export default Wordle;