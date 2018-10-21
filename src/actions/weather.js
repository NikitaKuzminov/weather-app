import { createAction } from "redux-actions";

export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const RECIEVE_WEATHER = "RECIEVE_WEATHER";

export const requestWeather = createAction(REQUEST_WEATHER);
export const recieveWeather = createAction(RECIEVE_WEATHER);
