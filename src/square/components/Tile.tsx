import { Button } from "react-bootstrap";
import styles from "./Tile.module.css";

interface Props {
  code?: string;
  disabled?: boolean;

  onClick?: () => void;
}

export function Tile({ code, disabled, onClick }: Props) {
  return (
    <Button
      variant="custom"
      className={styles.btnStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {code}
    </Button>
  );
}
