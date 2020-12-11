import { useState } from "react";

function Wall({ i, j }) {
  const [selected, setSelected] = useState(false);
  const isVericalWall = j % 2 == 0;
  return (
    <div
      className={`Wall ${(isVericalWall && "Vertical") || "Horizontal"}`}
      data-i={i}
      data-j={j}
      onClick={() => setSelected(!selected)}
      data-selected={selected}
    />
  );
}

export default Wall;
