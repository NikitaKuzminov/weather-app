import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

import { requestWeather, recieveWeather } from "../actions";

const weatherList = handleAction(
  recieveWeather,
  (state, { payload }) => payload,
  []
);

const isFetching = handleActions(
  {
    [requestWeather]: (state, { payload }) => true,
    [recieveWeather]: (state, { payload }) => false
  },
  false
);

export default combineReducers({
  weatherList,
  isFetching
});
