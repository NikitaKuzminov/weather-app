import { combineReducers } from "redux";

import cities from "./cities";
import weather from "./weather";

export default combineReducers({ cities, weather });
