import React from "react";
import { useEffect } from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";
function App() {
  //Generator function khuyến khích sử dụng hơn là async function
  // useEffect(() => {
  //   function* demoGenerator() {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   }
  //   const gen = demoGenerator();
  //   console.log(gen.next());
  //   console.log(gen.next());
  //   console.log(gen.next());
  //   console.log(gen.next());
  //   const gen2 = demoGenerator();
  //   console.log(gen2.next());
  // }, []);
  useEffect(() => {
    function* demoGenerator() {
      console.log("running");
      let id = 1;
      while (true) {
        yield id;
        id++;
      }
    }
    const gen = demoGenerator();
    console.log(gen.next());
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
