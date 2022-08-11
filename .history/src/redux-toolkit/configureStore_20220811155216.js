import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByAmount } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger store state
const loggleMiddleware = (store) => (next) => (action) => {
  // your code is here
  console.log(action);
  action.payload = 10;
  next(action);
};
// const loggleMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//       // your code is here
//     };
//   };
// };
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(loggleMiddleware),
});
store.subscribe(() => {
  // javascript observer pattern
  console.log(`current state: ${store.getState().counter.count}`);
});
store.dispatch(incrementByAmount(1));
store.dispatch(incrementByAmount(2));

export default store;
