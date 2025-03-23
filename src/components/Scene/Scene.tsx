import "./Scene.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Title from "./Title/Title";
import RotateUI from "./RotateUI/RotateUI";
import Screen from "./Screen/Screen";
import Tim3D from "./Tim3D/Tim3D";
import Flowers from "./Flowers/Flowers";
import Rocket from "./Rocket/Rocket";
import Trees from "./Trees/Trees";
function Scene() {
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 45, position: [0, 10, 30], far: 200 }}
      shadows
    >
      {/* <ScriptedCamera />*/}
      <directionalLight intensity={1.5} position={[1, 1, 2]} castShadow />
      <ambientLight intensity={0.25} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxZoom={1}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI - Math.PI / 2.1}
      />
      <Title />
      <RotateUI />
      <Screen />
      <Tim3D />
      <Flowers />
      <Rocket />
      <Trees />
    </Canvas>
  );
}

export default Scene;
