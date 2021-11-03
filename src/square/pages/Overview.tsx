import { SquareGame } from "../components";
import { SquareGameCreatorProvider } from "../context/SquareGameCreatorProvider";

export function Overview() {
  return (
    <>
      <h1>Square game</h1>
        <SquareGameCreatorProvider rows={4} cols={7}>
          <SquareGame />
        </SquareGameCreatorProvider>
        <br />
        <SquareGameCreatorProvider rows={2} cols={2}>
          <SquareGame />
        </SquareGameCreatorProvider>
        <br />
        <SquareGameCreatorProvider rows={1} cols={8}>
          <SquareGame />
        </SquareGameCreatorProvider>
    </>
  );
}
