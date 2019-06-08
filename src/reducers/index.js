import { combineReducers } from "redux";

import { CounterReducer, selectCounterReducer } from "./CounterReducer";
export default combineReducers({
  counters: CounterReducer,
  selected: selectCounterReducer
});
