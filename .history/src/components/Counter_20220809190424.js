import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDarkMode from "../hooks/useDarkMode";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux-toolkit/counterSlice";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";
// import { decrement, increment, incrementByValue } from "../redux/counter";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByAmount(10));
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
          Increase by 10
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrementByValue}
        >
          Decrease by 10
        </button>
        <SwitchDarkMode></SwitchDarkMode>
      </div>
    </div>
  );
};
function SwitchDarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <button
      className="inline-block p-2 border border-gray-200"
      onClick={handleToggleDarkMode}
    >
      Toggle dark mode
    </button>
  );
}
export default Counter;