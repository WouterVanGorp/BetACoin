import { useReducer } from "react";
import { Tile, Game } from "../models";
import {
  SquareGameCreatorContext,
  SquareGameContext,
  SquareGameUpdateContext,
} from "./SquareGameContexts";

interface Props {
  children: React.ReactNode;
  id:number;
  rows: number;
  cols: number;
}

export function SquareGameCreatorProvider({ children, id, rows, cols }: Props) {
  const [state, dispatch] = useReducer(reducer, { id, rows, cols }, createGame);

  function createTiles(rows: number, cols: number): Tile[] {
    const result: Tile[] = [];
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) result.push(createTile(i, j));
    return result;
  }

  function createTile(row: number, col: number): Tile {
    return { clicked: false, code: `R${row}C${col}`, className: "" };
  }

  function createGame({ id, rows, cols }: { id: number, rows: number; cols: number }): Game {
    const tiles = createTiles(rows, cols);
    const game: Game = {
      id: id,
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
        // if this is the last clickable tile
        if (
          state.tiles.filter((t) => !t.clicked).length === 1 &&
          state.active &&
          state.winningCode === payload.code
        ) {
          const tiles = state.tiles.map((t) =>
            t.code === state.winningCode
              ? { ...t, className: "tileWin", clicked: true }
              : { ...t, clicked: true, className: "" }
          );
          return { ...state, tiles: [...tiles], active: false };
        }
        // If previous tile has won
        if (state.winningCode === state.prevTile) {
          const tiles = state.tiles.map((t) =>
            t.code === state.winningCode
              ? { ...t, className: "tileWin", clicked: true }
              : { ...t, clicked: true, className: "" }
          );
          return { ...state, tiles: [...tiles], active: false };
        }
        // all other cases
        const tiles = state.tiles.map((t) =>
          t.code === payload.code
            ? { ...t, className: "tilePrev", clicked: true }
            : { ...t, className: "" }
        );
        return { ...state, tiles: [...tiles], prevTile: payload.code };
      }
      default: {
        return { ...state };
      }
    }
  }

  const tileClicked = (code: string) => dispatch({ type: "tileClicked", payload: { code } });

  return (
    <SquareGameCreatorContext.Provider value={{ id, rows, cols }}>
      <SquareGameContext.Provider value={state}>
        <SquareGameUpdateContext.Provider value={tileClicked}>
          {children}
        </SquareGameUpdateContext.Provider>
      </SquareGameContext.Provider>
    </SquareGameCreatorContext.Provider>
  );
}

type SquareGameActions = "tileClicked";
