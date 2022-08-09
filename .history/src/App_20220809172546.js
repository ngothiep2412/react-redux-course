import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
function App() {
  const globalOption = useSelector((state) => state.global);
  console.log(globalOption);
  return (
    <div>
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
