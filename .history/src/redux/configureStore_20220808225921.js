import { createStore, combineReducers } from "redux";
import couterReducer from "./counter";

const reducer = combineReducers({
  // key: value
  counter: couterReducer,
});

const store = createStore(reducer);
export default store;
