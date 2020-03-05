import {
  INCREMENT_GAME_RUN,
  GET_WINNERS,
  SET_FREE_CELLS,
  SET_GAME_MODE,
  SET_MAP,
  SET_MODE_LIST,
  SET_NAME,
  SET_WINNER
} from "../actions/types";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FREE_CELLS:
      return { ...state, freeCells: action.freeCells };

    case SET_GAME_MODE:
      return { ...state, gameMode: action.mode };

    case INCREMENT_GAME_RUN:
      const gameRun = isNaN(state.gameRun) ? 1 : state.gameRun + 1;

      return { ...state, gameRun };

    case GET_WINNERS:
      return { ...state, winners: action.winners };

    case SET_MAP:
      return { ...state, map: action.map };

    case SET_MODE_LIST:
      return { ...state, modeList: action.modeList };

    case SET_NAME:
      return { ...state, name: action.name };

    case SET_WINNER:
      return { ...state, winner: action.winner };
    default:
      return state;
  }
};

export default rootReducer;
