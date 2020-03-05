import React from "react";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
  const { name, winner } = useSelector(state => state);

  const winnerTitle =
    winner && winner === "Player" ? name + " won" : "Computer won";

  return <>{winner ? <h2 className="winner-title">{winnerTitle}</h2> : null}</>;
};

export default ScoreBoard;
