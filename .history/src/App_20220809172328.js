import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
import { useEffect } from "react";
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
function SwitchDarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return <button onClick={handleToggleDarkMode}>Toggle dark mode</button>;
}
export default App;
