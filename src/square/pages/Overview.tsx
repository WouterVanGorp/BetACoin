import styles from "./Overview.module.css";
import { SquareContainer } from "../components";

export function Overview() {
  return (
    <>
      <h1>Square game</h1>
      <div>
        <SquareContainer cols={3} rows={3}>
          <span>test2</span>
        </SquareContainer>
      </div>
    </>
  );
}
