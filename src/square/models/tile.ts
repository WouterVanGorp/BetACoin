export interface ITile {
  code: string;
  clicked: boolean;
}

export class Tile implements ITile {
  public code: string;
  public clicked: boolean;

  constructor(code: string) {
    this.code = code;
    this.clicked = false;
  }

  public click = () => (this.clicked = true);
}
