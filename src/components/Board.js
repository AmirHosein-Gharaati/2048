import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import { useState } from "react";

const BoardView = () => {
  const [board, setTboard] = useState(new Board());
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
      <div className="board">
        {cells}
        {tiles}
      </div>
    </div>
  );
};

export default BoardView;
