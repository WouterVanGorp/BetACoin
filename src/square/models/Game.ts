import { Tile } from "./Tiles";

export interface Game {
  id: number;
  winningCode: string;
  active: boolean;
  rows: number;
  cols: number;
  tiles: Tile[];
}
