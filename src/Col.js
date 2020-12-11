import { useState } from "react";

function Col({ i, j }) {
  const [selected, setSelected] = useState();
  const [content, setContent] = useState();
  const [players, setPlayers] = useState(['💩', '🔥']);

  const onClick = () => {
    if(selected) return;
    window.choice += 1;
    const player = players[window.choice % 2];
    setContent(player);
    setPlayers(players.reverse())
    setSelected(!selected);
  };
  return (
    <div
      className="Col"
      data-selected={selected}
      onClick={onClick}
  >{content}</div>
  );
}

export default Col;
