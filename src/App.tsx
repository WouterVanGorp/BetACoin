import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components";
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

const codeGenerator = (numCol = 4, numRow = 4) => {
  let codes = [];
  for (let r = 0; r < numRow; r++) {
    for (let c = 1; c <= numCol; c++) {
      codes.push({
        key: `${c}${String.fromCharCode(65 + r)}`,
        code: makeCode(10),
      });
    }
  }
  return codes;
};

function makeCode(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const tileClickHandler = (tile: any) => {
  tile.clicked = true;
};

function App() {
  const [tilelist, changeTile] = useState(boardGenerator());

  return (
    <div>
      <Header />
      <div>
        <Board bs={tilelist} onClick={tileClickHandler}></Board>
      </div>
    </div>
  );
}

export default App;
