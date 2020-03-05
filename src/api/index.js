import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModeList } from "../store/actions";

export function useGameMode() {
  const dispatch = useDispatch();

  useEffect(() => {
    let didCancel = false;

    axios(process.env.REACT_APP_GAME_MODE_URL)
      .then(response => {
        if (!didCancel) {
          const data = response.data;
          dispatch(setModeList(data));
        }
      })
      .catch(err => console.log("Err", err));

    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line
  }, []);
}

export function postWinners(data) {
  axios
    .post(process.env.REACT_APP_WINNERS_URL, data)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => console.log("Error of submitting data to the server", err));
}
