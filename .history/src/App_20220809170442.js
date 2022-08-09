import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  const globalOption = useSelector((state) => state.global);
  console.log(globalOption);
  return (
    <div>
      <Card></Card>
      <button>Toggle dark mode</button>
    </div>
  );
}

export default App;
