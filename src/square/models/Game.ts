import { Tile } from "./Tiles";

export interface Game {
  id: number;
  winningCode: string;
  active: boolean;
  prevTile: string | undefined;
  rows: number;
  cols: number;
  tiles: Tile[];
}
