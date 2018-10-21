import { createAction } from "redux-actions";

export const UPDATE_SEARCH_FIELD_INPUT = "UPDATE_SEARCH_FIELD_INPUT";
export const CLEAR_SEARCH_FIELD_INPUT = "CLEAR_SEARCH_FIELD_INPUT";
export const REQUEST_CITIES_LIST = "REQUEST_CITIES_LIST";
export const RECIEVE_CITIES_LIST = "RECIEVE_CITIES_LIST";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const updateSearchFieldInput = createAction(UPDATE_SEARCH_FIELD_INPUT);
export const clearSearchFieldInput = createAction(CLEAR_SEARCH_FIELD_INPUT);
export const requestCitiesList = createAction(REQUEST_CITIES_LIST);
export const recieveCitiesList = createAction(RECIEVE_CITIES_LIST);
export const toggleFavorite = createAction(TOGGLE_FAVORITE);
