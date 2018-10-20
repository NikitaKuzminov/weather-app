import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

import {
  updateSearchFieldInput,
  clearSearchFieldInput,
  requestCitiesList,
  recieveCitiesList,
  toggleFavorite
} from "../actions";

const searchFieldInput = handleActions(
  {
    [updateSearchFieldInput]: (state, { payload }) => payload,
    [clearSearchFieldInput]: () => ""
  },
  ""
);

const citiesList = handleAction(
  recieveCitiesList,
  (state, { payload }) => payload,
  []
);

const isFetching = handleActions(
  {
    [requestCitiesList]: (state, { payload }) => true,
    [recieveCitiesList]: (state, { payload }) => false
  },
  false
);

const favorite = handleAction(
  toggleFavorite,
  (state, { payload }) =>
    state.some(city => city.id === payload.id)
      ? state.filter(city => city.id !== payload.id)
      : [...state, payload],
  []
);

export default combineReducers({
  searchFieldInput,
  citiesList,
  isFetching,
  favorite
});
