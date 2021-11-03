import { Card } from "react-bootstrap";
import { useSquareGameContext, useSquareGameUpdateContext } from "../context/SquareGameContect";

import styles from "./SquareGame.module.css";
import { Tile } from "./Tile";

export function SquareGame() {
  const { tiles, rows, cols } = useSquareGameContext();
  const onTileClick = useSquareGameUpdateContext();
  return (
    <Card body>
      {new Array(rows).fill(1).map((_, rowIndex) => (
        <div key={"row-" + rowIndex} className={`row ${styles.rowStyle}`}>
          {new Array(cols).fill(2).map((_, colIndex) => (
            <div key={"col-" + colIndex} className="col">
              <Tile
                code={tiles[rowIndex * colIndex].code}
                disabled={tiles[rowIndex * colIndex].clicked}
                onClick={() => onTileClick(tiles[rowIndex * colIndex].code)}
              />
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
}
