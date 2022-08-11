import React from "react";
import { useEffect } from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";
function App() {
  //Generator function khuyến khích sử dụng hơn là async function
  useEffect(() => {
    function* demoGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
