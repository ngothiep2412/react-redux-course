import React, { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Couter></Couter>
    </div>
  );
}

export default App;
