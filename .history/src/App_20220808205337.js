import React, { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5"></div>
    </div>
  );
}

export default App;
