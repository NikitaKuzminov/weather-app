import { call, put, take, takeEvery, select } from "redux-saga/effects";

import { getSearchInput } from "../selectors";

import {
  REQUEST_CITIES_LIST,
  REQUEST_WEATHER,
  recieveCitiesList,
  recieveWeather
} from "../actions";
import { getCitiesOnSearch, getWeather } from "../managers";

export function* fetchCitiesList() {
  try {
    let city = yield select(getSearchInput);
    if (city.length !== 0) {
      const data = yield call(() => getCitiesOnSearch(city));
      yield put(recieveCitiesList(data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchWeather() {
  try {
    const action = yield take(REQUEST_WEATHER);
    const data = yield call(() => getWeather(action.payload));
    yield put(recieveWeather(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchingCitiesList() {
  yield takeEvery(REQUEST_CITIES_LIST, fetchCitiesList);
  yield takeEvery(REQUEST_WEATHER, fetchWeather);
}
