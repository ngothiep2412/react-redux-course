import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
function App() {
  // const globalOption = useSelector((state) => state.global);
  // const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode);
  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
