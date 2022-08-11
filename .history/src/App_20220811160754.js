import React from "react";
import "./App.css";
import ButtonToggle from "./components/ButtonToggle";
import HackerNews from "./components/HackerNews";
import Sidebar from "./components/Sidebar";
function App() {
  //Generator function
  return (
    <div>
      {/* <Sidebar></Sidebar>
      <ButtonToggle></ButtonToggle> */}
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
