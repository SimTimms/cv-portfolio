import { useEffect, useRef, useState, createContext } from "react";
import "./App.css";
import Scene from "./components/Scene/Scene";
import Back from "./components/Back/Back";
import changeBackground from "./utils/changeBackground";
import Available from "./components/Available/Available";
import addMouseListener from "./utils/addMouseListener";

export const enum SCENES {
  TIM = 0,
  PROJECTS = 1,
}

export const ActionContext = createContext<{
  sceneNumber: SCENES;
  setSceneNumber: React.Dispatch<React.SetStateAction<SCENES>>;
}>({
  sceneNumber: SCENES.PROJECTS,
  setSceneNumber: () => {},
});

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [sceneNumber, setSceneNumber] = useState<SCENES>(SCENES.TIM);
  useEffect(() => {
    if (!divRef.current) return;
    addMouseListener((x, y) => {
      divRef.current && changeBackground(x, y, divRef.current);
    });
  }, [divRef.current]);

  return (
    <div ref={divRef} className="app">
      <ActionContext.Provider value={{ sceneNumber, setSceneNumber }}>
        <Available />
        <Back />
        <Scene />
      </ActionContext.Provider>
    </div>
  );
}

export default App;
