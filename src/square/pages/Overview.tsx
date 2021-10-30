import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import styles from "./Overview.module.css";
import { Board } from "./../components";
import { ISquareGame, SquareGame } from "./../models";

export function Overview() {
  const [games, addGame] = useState<ISquareGame[]>([]);

  const newGame = () => {
    addGame([...games, new SquareGame(games.length, 4, 4, 1)]);
  };

  return (
    <>
      <h1>Square game</h1>
      <Button variant="primary" onClick={newGame}>
        Add Game
      </Button>

      <div className={styles.cardContainer}>
        {games.map((board) => (
          <Card key={board.id} className={styles.card} body>
            <Card.Title>{board.getChances()}</Card.Title>
            <Board board={board} />
          </Card>
        ))}
      </div>
    </>
  );
}
