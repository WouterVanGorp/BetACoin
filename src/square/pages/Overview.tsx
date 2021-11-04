import { Button } from "react-bootstrap";

import styles from "./Overview.module.css";
import { SquareGame } from "../components";
import { SquareGameCreatorProvider } from "../context/SquareGameCreatorProvider";
import { useAppDispatch, useAppSelector } from "../../store/hook";

export function Overview() {
  const games = useAppSelector((state) => state.square.games);
  const dispatch = useAppDispatch();

  const addNewGame = () => {
    dispatch({ type: "square/addGame" });
  };
  return (
    <>
      <h1>Square game</h1>
      <br />
      <Button className={styles.addBtn} onClick={addNewGame} variant="custom">
        Add game
      </Button>
      <br />
      <div className={styles.gamesContainer}>
        {games.map((g) => (
          <SquareGameCreatorProvider
            key={g.id}
            id={g.id}
            rows={g.rows}
            cols={g.cols}
          >
            <SquareGame />
          </SquareGameCreatorProvider>
        ))}
      </div>
    </>
  );
}
