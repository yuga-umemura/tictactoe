import React, { useState } from 'react';
import { calculateWinner } from '../helpers/calculateWinner';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number): void => {
    const squareCopy = squares.slice();
    if (calculateWinner(squareCopy) || squareCopy[i]) {
      return;
    }
    squareCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squareCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next platyer: ${xIsNext} ? 'X' : 'O'`;
  }

  // Boardコンポーネント側のstateが変わると、Squareコンポーネントも再描画される
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
