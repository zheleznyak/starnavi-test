import { setFreeCells, setMap, setWinner } from "../../store/actions";
import { postWinners } from "../../api";
import { determineWinner, getRandomCell } from "../../helpers";

export const startGameStep = (map, freeCells, delay, dispatch, name) => {
  const winner = determineWinner(map);

  if (freeCells.length === 0) return;

  if (winner) {
    dispatch(setWinner(winner));

    let date = new Date();
    postWinners({
      winner: winner === "Player" ? name : winner,
      date: date.toLocaleString()
    });

    return;
  }

  const randomFreeCell = getRandomCell(freeCells, freeCells.length);

  map[randomFreeCell] = {
    clickable: true,
    onClick: e => {
      if (map[randomFreeCell].clickable === false) return;

      map[randomFreeCell] = {
        clickable: false,
        owner: "player"
      };

      startGameStep(map, freeCells, delay, dispatch, name);
    }
  };

  const timerId = setTimeout(() => {
    if (map[randomFreeCell].clickable) {
      map[randomFreeCell] = {
        clickable: false,
        owner: "computer"
      };

      startGameStep(map, freeCells, delay, dispatch, name);
    }
  }, delay);

  dispatch(setMap(map));
  dispatch(setFreeCells(freeCells));
  freeCells = freeCells.filter(item => item !== randomFreeCell);

  return timerId;
};
