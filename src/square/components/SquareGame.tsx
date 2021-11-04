import { Card } from "react-bootstrap";

import {
  useSquareGameContext,
  useSquareGameUpdateContext,
} from "../context/SquareGameContextHooks";
import styles from "./SquareGame.module.css";
import { Tile } from "./Tile";

export function SquareGame() {
  const { tiles, rows, cols } = useSquareGameContext();
  const { tileClicked, getGameTitle } = useSquareGameUpdateContext();

  return (
    <Card className={styles.card} style={{ width: `${cols * 100}px` }}>
      <Card.Title className={styles.cardTitle}>{getGameTitle()}</Card.Title>
      <Card.Body>
        {new Array(rows).fill(1).map((_, rowIndex) => (
          <div key={"row-" + rowIndex} className={`row ${styles.rowStyle}`}>
            {new Array(cols).fill(2).map((_, colIndex) => (
              <div key={"col-" + colIndex} className="col">
                <Tile
                  code={tiles[rowIndex * cols + colIndex].code}
                  disabled={tiles[rowIndex * cols + colIndex].clicked}
                  onClick={() =>
                    tileClicked(tiles[rowIndex * cols + colIndex].code)
                  }
                  className={tiles[rowIndex * cols + colIndex].className}
                />
              </div>
            ))}
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
