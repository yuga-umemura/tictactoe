import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number) => {
    //todo
  };

  const moves = history.map((squares: string[], move: number) => {
    const description: string =
      move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
