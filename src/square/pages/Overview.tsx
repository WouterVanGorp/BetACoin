import { SquareGame } from "../components";
import { SquareGameCreatorProvider } from "./../context/SquareGameContect";

export function Overview() {
  return (
    <>
      <h1>Square game</h1>
      <div className="row">
        <SquareGameCreatorProvider rows={3} cols={3}>
          <SquareGame />
        </SquareGameCreatorProvider>
      </div>
    </>
  );
}
