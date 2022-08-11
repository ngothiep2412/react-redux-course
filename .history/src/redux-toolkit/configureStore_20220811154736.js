import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByAmount } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// const loggleMiddleware = (store) => (next) => (action) => {
//   // your code is here
// };
const loggleMiddleware = function (store) {
  return function (next) {
    return function (action) {
      // your code is here
    };
  };
};
const store = configureStore({
  reducer: reducer,
});
store.subscribe(() => {
  // javascript observer pattern
  console.log(`current state: ${store.getState().counter.count}`);
});
store.dispatch(incrementByAmount(10));
store.dispatch(incrementByAmount(1));

export default store;
