import { useState } from "react";
import useEvent from "../helper/hooks/useEvents";
import { Board } from "../helper";
import Tile from "./Tile";
import Cell from "./Cell";
import Button from "./Buttons";
import GameOverlay from "./GameOverlay";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const resetGame = () => {
    setBoard(new Board());
  };

  const resetBoard = (direction) => {
    const boardClone = Object.assign(
      Object.create(Object.getPrototypeOf(board)),
      board
    );
    const newBoard = boardClone.move(direction);
    setBoard(newBoard);
  };

  const handleKeyDown = (event) => {
    if (board.hasWon()) return;

    // keydown for: left, up, right, down
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      resetBoard(direction);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  return (
    <div>
      <div className="details-box">
        <Button text="New Game" onClick={resetGame} />
        <div className="score-box">
          <div className="score-header">Score: </div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
};

export default BoardView;
