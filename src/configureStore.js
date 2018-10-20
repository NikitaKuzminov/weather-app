import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import { watchFetchingCitiesList } from "./sagas/sagas";

import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = {
  cities: {
    favorite: loadState() || []
  }
};

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchingCitiesList);
store.subscribe(() => {
  saveState(store.getState().cities.favorite);
});
