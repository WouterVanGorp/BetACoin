import React from "react";
import "./styles/App.css";
import { Header, Navbar } from "./components";
import { Board } from "./square/pages/Board";

const boardGenerator = (numCol = 4, numRow = 4) => {
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
    <div>
      <Header />
      <div>
        <Navbar />
      </div>
      <div>
        <Board bs={tilelist} onClick={tileClickHandler}></Board>
      </div>
    </div>
  );
}

export default App;
