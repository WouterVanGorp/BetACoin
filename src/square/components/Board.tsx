import { Button } from "react-bootstrap";

import styles from "./Board.module.css";
import { ISquareGame, ITile } from "../models";

interface Props {
  board: ISquareGame;
}

export function Board({ board }: Props) {
  const myStyles = {
    built: { backgroundColor: "rgba(50, 50, 50, 0.8)", color: "#b9b9b9" },
    unbuilt: { backgroundColor: "rgba(255, 255, 255, 0.8)" },
  };

  return (
    <div className={styles.boardContainer}>
      {board.tiles.map((tile: ITile) => {
        return (
          <div
            key={tile.code}
            className={styles.boardItem}
            style={tile.clicked ? myStyles.built : myStyles.unbuilt}
          >
            <Button variant="secondary">{tile.code}</Button>
          </div>
        );
      })}
    </div>
  );
}
