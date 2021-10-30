import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./Overview.module.css";

interface Props {}

export function Overview({}: Props) {
  const [games, addGame] = useState(["", ""]);

  const newGame = () => {
    addGame([...games, ""]);
  };

  return (
    <>
      <h1>Square game</h1>
      <Button variant="primary" onClick={newGame}>
        Add Game
      </Button>

      <div className={styles.cardContainer}>
        {games.map((_) => (
          <Card className={styles.card} body>
            test
          </Card>
        ))}
      </div>
    </>
  );
}
