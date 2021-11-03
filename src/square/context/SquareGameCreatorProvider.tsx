import { useReducer } from "react";
import { Tile, Game } from "../models";
import {
  SquareGameCreatorContext,
  SquareGameContext,
  SquareGameUpdateContext,
} from "./SquareGameContexts";

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
      prevTile: undefined,
      cols,
      rows,
      tiles: tiles,
      winningCode: tiles[Math.floor(Math.random() * tiles.length)].code,
    };

    return game;
  }

  function reducer(
    state: Game,
    { type, payload }: { type: SquareGameActions; payload: { code: string } }
  ): Game {
    switch (type) {
      case "tileClicked": {
        const tiles = state.tiles.map((t) =>
          t.code === payload.code
            ? { ...t, className: "tilePrev", clicked: true }
            : { ...t, className: "" }
        );
        if (state.winningCode === state.prevTile) {
          const tiles = state.tiles.map((t) =>
            t.code === state.winningCode
              ? { ...t, className: "tileWin", clicked: true }
              : { ...t, clicked: true, className: "" }
          );
          return { ...state, tiles: [...tiles], active: false };
          // if(!state.tiles.some(t => !t.clicked) && state.active )
        }
        return { ...state, tiles: [...tiles], prevTile: payload.code };
      }
      default: {
        return { ...state };
      }
    }
  }

  const tileClicked = (code: string) => {
    dispatch({ type: "tileClicked", payload: { code } });
  };

  return (
    <SquareGameCreatorContext.Provider value={{ rows, cols }}>
      <SquareGameContext.Provider value={state}>
        <SquareGameUpdateContext.Provider value={tileClicked}>
          {children}
        </SquareGameUpdateContext.Provider>
      </SquareGameContext.Provider>
    </SquareGameCreatorContext.Provider>
  );
}

type SquareGameActions = "tileClicked";
