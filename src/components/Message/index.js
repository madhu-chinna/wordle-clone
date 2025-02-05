import React from "react";
import "./index.css";

const Message = ({ status, onRestart }) => {
  return (
    <div className="message-container">
      <p className={`message ${status}`}>{status === "won" ? "🎉 You won!" : "❌ You lost! Try again."}</p>
      <button onClick={onRestart}>New Game</button>
    </div>
  );
};

export default Message;
