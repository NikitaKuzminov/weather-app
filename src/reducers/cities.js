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

export default combineReducers({ searchFieldInput, citiesList, isFetching });
