import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  const global = useSelector((state) => state.global);
  return (
    <div>
      <Card></Card>
      <button>Toggle dark mode</button>
    </div>
  );
}

export default App;
