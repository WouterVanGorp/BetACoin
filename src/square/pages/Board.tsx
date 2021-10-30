interface Props {
  bs: any;
  onClick: (t: string) => void;
}

export function Board({ bs, onClick }: Props) {
  return (
    <div className="board-container">
      {bs.map((tile: any) => {
        return (
          <div
            onClick={() => onClick(tile)}
            key={tile.key}
            className="board-item"
          >
            {tile.name}
          </div>
        );
      })}
    </div>
  );
}
