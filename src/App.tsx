import { useEffect, useRef } from "react";
import "./App.css";
import Scene from "./components/Scene/Scene";
import changeBackground from "./utils/changeBackground";
import Available from "./components/Available/Available";
import addMouseListener from "./utils/addMouseListener";

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    addMouseListener(divRef.current, (x, y) => {
      divRef.current && changeBackground(x, y, divRef.current);
    });
  }, [divRef.current]);

  return (
    <div ref={divRef} className="app">
      <Available />
      <Scene />
    </div>
  );
}

export default App;
