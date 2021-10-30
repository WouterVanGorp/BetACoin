import { Tile } from "./tile";

export interface ISquareGame {
  id: number;
  tiles: Tile[];
  currentPrice: number;
  state: "new" | "active" | "finished";

  getChances: () => string;
}

export class SquareGame implements ISquareGame {
  public id: number;
  public winningCode: string;
  public tiles: Tile[];
  public currentPrice: number;
  public state: "active" | "finished";

  constructor(id: number, cols: number, rows: number, startPrice: number) {
    this.id = id;
    this.state = "active";
    this.currentPrice = startPrice;
    this.tiles = this.generateTiles(cols, rows);
    this.winningCode =
      this.tiles[Math.floor(Math.random() * (rows * cols))].code;
  }

  private generateTiles(cols: number, rows: number): Tile[] {
    const result = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        result.push(new Tile(this.createCode(c, r)));
      }
    }
    return result;
  }

  private createCode = (col: number, row: number): string =>
    `${col}${String.fromCharCode(65 + row)}`;

  public getChances = (): string => {
    const amount = this.tiles.length;
    const bought = this.tiles.filter(t => t.clicked).length;
    return `${bought}/${amount}`;
  };
}
