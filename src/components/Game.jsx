import  { useState } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";
import "./Game.css"; // Import CSS file

const Game = () => {
  const allColors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const [targetColor, setTargetColor] = useState(randomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Guess the correct color!");
  const [animationClass, setAnimationClass] = useState(""); // Animation class

  function randomColor() {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setStatus("Correct! 🎉");
      setScore(score + 1);
      setAnimationClass("celebrate"); // Apply celebration animation
    } else {
      setStatus("Wrong! Try again.");
      setAnimationClass("fade-out"); // Apply fade-out effect
    }

    setTimeout(() => {
        // Reset animation and start a new game
        setAnimationClass("");
        setTargetColor(randomColor());
        setStatus("Guess the correct color!");
      }, 1000); 
  };

  const handleNewGame = () => {
    setScore(0);
    setTargetColor(randomColor());
    setStatus("Guess the correct color!");
    setAnimationClass(""); // Reset animation
  };

  return (
    <div className="game-container">
      <h1>Color Guessing Game</h1>
      <ColorBox color={targetColor} />
      <p className={`game-status ${animationClass}`} data-testid="gameStatus">
        {status}
      </p>
      <ColorOptions colors={allColors} handleGuess={handleGuess} />
      <p data-testid="score">Score: {score}</p>
      <button onClick={handleNewGame} data-testid="newGameButton">
        New Game
      </button>
    </div>
  );
};

export default Game;
