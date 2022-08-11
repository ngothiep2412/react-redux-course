import React from "react";
import { useEffect } from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";
function App() {
  //Generator function khuyến khích sử dụng hơn là async function
  useEffect(() => {
    function* demoGenerator() {
      yield;
    }
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
