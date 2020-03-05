import React from "react";
import { useSelector } from "react-redux";
import { useGameMode } from "./api";
import "./index.css";
import LeaderBoard from "./components/LeaderBoard";
import Loader from "./components/Loader";
import MainMenu from "./components/MainMenu";
import Map from "./components/Map";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  useGameMode();

  const { freeCells, gameMode, map, modeList } = useSelector(state => state);

  if (
    !modeList ||
    (freeCells && freeCells.length === 0) ||
    (map && map.length === 0)
  )
    return <Loader />;

  if (!gameMode) return <MainMenu modeList={modeList} />;

  return (
    <>
      <MainMenu modeList={modeList} />
      <ScoreBoard />
      <Map />
      <LeaderBoard />
    </>
  );
};

export default App;
