import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  const globalOption = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {};
  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
