import React, { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default App;
