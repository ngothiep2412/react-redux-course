import React, { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[200px] mx-auto mt-10">
      <h2>Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
