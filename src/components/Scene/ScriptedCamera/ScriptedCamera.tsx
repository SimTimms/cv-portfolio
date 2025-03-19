import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ActionContext } from "../../../App";
import { useContext } from "react";

export default function ScriptedCamera() {
  const { sceneNumber } = useContext(ActionContext);
  const camera = useThree((state) => state.camera);
  const scenes = [
    {
      positions: { duration: 3, delay: 0.1, x: 0, y: 16, z: 40 },
      lookAt: { duration: 3, delay: 0.1, x: -0.4, y: 0, z: 0 },
    },
    {
      positions: { duration: 3, delay: 0.1, x: 0, y: -7, z: 10 },
      lookAt: { duration: 3, delay: 0.1, x: 0, y: 0.8, z: 0 },
    },
  ];
  gsap.to(camera.position, scenes[sceneNumber].positions);
  gsap.to(camera.rotation, scenes[sceneNumber].lookAt);

  return <> </>;
}
