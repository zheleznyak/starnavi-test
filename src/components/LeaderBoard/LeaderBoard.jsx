import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWinners } from "../../store/actions";
import Loader from "../Loader";

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const { winners } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchWinners());

    // eslint-disable-next-line
  }, [winners]);

  if (!winners) return <Loader />;

  return (
    <div className="container">
      <h1 className="leader-board-title">Leader Board</h1>
      <table className="leader-board-table">
        <tbody>
          {winners.map(item => (
            <tr key={item.id}>
              <td className="text-left">{item.winner}</td>
              <td className="text-right">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
