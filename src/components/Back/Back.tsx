import "./Back.css";
import { ActionContext, SCENES } from "../../App";

export default function Back() {
  return (
    <ActionContext.Consumer>
      {({ setSceneNumber }) => (
        <div className="back-wrapper">
          <button onClick={() => setSceneNumber(SCENES.TIM)}>Back</button>
        </div>
      )}
    </ActionContext.Consumer>
  );
}
