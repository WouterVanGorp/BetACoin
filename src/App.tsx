import React from "react";
import "./App.css";
import { Board } from "./square/pages/Board";

const boardGenerator = (numCol = 3, numRow = 3) => {
  let board = [];
  for (let r = 0; r < numRow; r++) {
    for (let c = 1; c <= numCol; c++) {
      board.push({
        key: `${c}${String.fromCharCode(65 + r)}`,
        clicked: false,
        winner: false,
        //TODO RANDOM gererate winner
      });
    }
  }
  return board;
};

const tileClickHandler = (tile: any) => {
  tile.clicked = true;
};
let tilelist = boardGenerator();

function App() {
  return (
    <div className="App">
      <Board bs={tilelist} onClick={tileClickHandler}></Board>
    </div>
  );
}

export default App;
