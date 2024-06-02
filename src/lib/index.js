import { legacy_createStore, combineReducers } from "redux";
import { counter } from "./reducer/counter";

const reducer = combineReducers({
  counter,
});

export const store = legacy_createStore(reducer);
