import { createStore, combineReducers } from "redux";
import couterReducer from "./counter";

const reducer = combineReducers({
  // key: value
  count: couterReducer,
});

const store = createStore(reducer);
