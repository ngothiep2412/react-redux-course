import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
import { useEffect } from "react";
function App() {
  const globalOption = useSelector((state) => state.global);
  console.log(globalOption);
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, [darkMode]);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(darkMode));
  };

  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
