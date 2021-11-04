import React from "react";
import { Game } from "../models";

export const SquareGameCreatorContext = React.createContext<{
  id: number;
  rows: number;
  cols: number;
}>({ id: 0, rows: 3, cols: 3 });
export const SquareGameContext = React.createContext<Game>({} as Game);
export const SquareGameUpdateContext = React.createContext<
  (code: string) => void
>((code: string) => {});
