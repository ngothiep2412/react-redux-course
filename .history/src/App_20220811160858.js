import React from "react";
import { useEffect } from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";
function App() {
  //Generator function
  useEffect(() => {
    function* demoGenerator() {}
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
