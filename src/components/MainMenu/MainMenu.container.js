import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementGameRun,
  setFreeCells,
  setGameMode,
  setMap,
  setName,
  setWinner
} from "../../store/actions";
import { generateMap } from "../../helpers";
import MainMenu from "./MainMenu";

const MainMenuContainer = () => {
  const dispatch = useDispatch();

  const { modeList, winner } = useSelector(state => state);
  const modeListKeys = Object.keys(modeList);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target;

    if (winner) dispatch(setWinner(""));

    if (target && target.elements) {
      const gameMode = target.elements.difficulty.value;
      const { field } = modeList[gameMode];
      const mapTable = generateMap(field);
      let cells = [];

      for (let i = field * field - 1; i >= 0; --i) cells.push(i);

      dispatch(setGameMode(gameMode));
      dispatch(setName(target.elements.name.value));
      dispatch(setMap(mapTable));
      dispatch(setFreeCells(cells.reverse()));
      dispatch(incrementGameRun());
    }
  };

  return (
    <MainMenu
      handleSubmit={handleSubmit}
      modeListKeys={modeListKeys}
      winner={winner}
    />
  );
};

export default MainMenuContainer;
