import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";
import { startGameStep } from "./helpers";

const MapContainer = () => {
  const dispatch = useDispatch();
  const { freeCells, gameMode, gameRun, map, modeList, name } = useSelector(
    state => state
  );

  const { delay, field } = modeList[gameMode];

  useEffect(() => {
    let newMap = [...map];
    let newFreeCells = [...freeCells];

    const timerId = startGameStep(newMap, newFreeCells, delay, dispatch, name);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [gameRun]);

  return <Map field={field} map={map} />;
};

export default MapContainer;
