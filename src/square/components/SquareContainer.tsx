import { ReactNode } from "react";
import { Card } from "react-bootstrap";

interface Props {
  children: ReactNode;
  cols: number;
  rows: number;
}

export function SquareContainer({ children, cols, rows }: Props) {
  const colArray = new Array(cols).fill(cols);
  const rowArray = new Array(rows).fill(rows);
  return (
    <Card body>
      {rowArray.map((_) => (
        <div className="row">
          {colArray.map((_) => (
            <div className="col"> {children}</div>
          ))}
        </div>
      ))}
    </Card>
  );
}
