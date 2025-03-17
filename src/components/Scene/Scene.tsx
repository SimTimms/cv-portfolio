import "./Scene.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tim from "./Tim/Tim";
import Title from "./Title/Title";
import RotateUI from "./RotateUI/RotateUI";
import Screen from "./Screen/Screen";
function Scene() {
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 45, position: [0, 10, 30], far: 100 }}
      shadows
    >
      <directionalLight intensity={3.5} position={[2, 1, 0]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxZoom={1}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI - Math.PI / 2.6}
      />
      <Tim />
      <Title />
      <RotateUI />
      <Screen />
    </Canvas>
  );
}

export default Scene;
