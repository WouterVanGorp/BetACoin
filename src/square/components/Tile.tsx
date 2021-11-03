import { Button } from "react-bootstrap";
import styles from "./Tile.module.css";

interface Props {
  code: string;
  disabled: boolean;
  className?: string;
  onClick: () => void;
}

export function Tile({ code, disabled, className, onClick }: Props) {
  return (
    <Button
      variant="custom"
      className={`${styles.btnStyle}  ${className ? styles[className] : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {code}
    </Button>
  );
}
