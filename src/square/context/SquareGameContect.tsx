import React, { useContext, useReducer } from "react";
import { Game, Tile } from "../models";

// CONTEXTS
const SquareGameCreatorContext = React.createContext<{
  rows: number;
  cols: number;
}>({ rows: 3, cols: 3 });
const SquareGameContext = React.createContext<Game>({} as Game);
const SquareGameUpdateContext = React.createContext<(code: string) => void>(
  (code: string) => {}
);

// HOOKS
export function useSquareGameCreatorContext() {
  return useContext(SquareGameCreatorContext);
}

export function useSquareGameContext() {
  return useContext(SquareGameContext);
}

export function useSquareGameUpdateContext() {
  return useContext(SquareGameUpdateContext);
}

interface Props {
  children: React.ReactNode;
  rows: number;
  cols: number;
}

export function SquareGameCreatorProvider({ children, rows, cols }: Props) {
  const [state, dispatch] = useReducer(reducer, { rows, cols }, createGame);

  function createTiles(rows: number, cols: number): Tile[] {
    const result: Tile[] = [];
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) result.push(createTile(i, j));
    return result;
  }

  function createTile(row: number, col: number): Tile {
    return { clicked: false, code: `R${row}C${col}`, className: "" };
  }

  function createGame({ rows, cols }: { rows: number; cols: number }): Game {
    const tiles = createTiles(rows, cols);
    const game: Game = {
      id: 1,
      active: true,
      cols,
      rows,
      tiles: tiles,
      winningCode: tiles[Math.floor(Math.random() * (rows * cols + 1))].code,
    };

    return game;
  }

  function reducer(state: Game, action: string): Game {
    dispatch("test");
    return { ...state };
  }

  const tileClicked = (code: string) => {};

  return (
    <SquareGameCreatorContext.Provider value={{ rows: 3, cols: 3 }}>
      <SquareGameContext.Provider value={state}>
        <SquareGameUpdateContext.Provider value={tileClicked}>
          {children}
        </SquareGameUpdateContext.Provider>
      </SquareGameContext.Provider>
    </SquareGameCreatorContext.Provider>
  );
}
