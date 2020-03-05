import axios from "axios";
import {
  INCREMENT_GAME_RUN,
  GET_WINNERS,
  SET_FREE_CELLS,
  SET_GAME_MODE,
  SET_MAP,
  SET_MODE_LIST,
  SET_NAME,
  SET_WINNER
} from "./types";

export const setMap = map => ({
  type: SET_MAP,
  map
});

export const setFreeCells = cells => ({
  type: SET_FREE_CELLS,
  freeCells: cells
});

export const setModeList = modeList => ({
  type: SET_MODE_LIST,
  modeList
});

export const setGameMode = mode => ({
  type: SET_GAME_MODE,
  mode
});

export const setName = name => ({
  type: SET_NAME,
  name
});

export const setWinner = winner => ({
  type: SET_WINNER,
  winner
});

export const incrementGameRun = () => ({
  type: INCREMENT_GAME_RUN
});

export const addWinners = winners => ({
  type: GET_WINNERS,
  winners
});

export const fetchWinners = () => dispatch => {
  axios
    .get(process.env.REACT_APP_WINNERS_URL)
    .then(response => {
      dispatch(addWinners(response.data));
    })
    .catch(error => {
      console.log("Cannot get winners from the server", error);
    });
};
