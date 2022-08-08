import React, { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";

function App() {
  const [count, setCount] = useState();
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Couter count={count} setCount={setCount}></Couter>
      <Couter count={count} setCount={setCount}></Couter>
    </div>
  );
}

export default App;
