import { call, put, takeEvery, select } from "redux-saga/effects";

import { getSearchInput } from "./selectors";

import { REQUEST_CITIES_LIST, recieveCitiesList } from "./actions";
import { getCitiesOnSearch } from "./managers";

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

export function* watchFetchingCitiesList() {
  yield takeEvery(REQUEST_CITIES_LIST, fetchCitiesList);
}
