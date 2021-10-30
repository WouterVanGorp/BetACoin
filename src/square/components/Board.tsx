interface Props {
  bs: any;
  onClick: (t: string) => void;
}

export function Board({ bs, onClick }: Props) {
  const myStyles = {
    built: { backgroundColor: "rgba(50, 50, 50, 0.8)", color: "#b9b9b9" },
    unbuilt: { backgroundColor: "rgba(255, 255, 255, 0.8)" },
  };

  return (
    <div className="board-container">
      {bs.map((tile: any) => {
        return (
          <div
            onClick={() => onClick(tile)}
            key={tile.key}
            className="board-item"
            style={tile.clicked ? myStyles.built : myStyles.unbuilt}
          >
            ...
          </div>
        );
      })}
    </div>
  );
}
