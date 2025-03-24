import "./Scene.css";
import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Title from "./Title/Title";
import RotateUI from "./RotateUI/RotateUI";
const Screen = lazy(() => import("./Screen/Screen"));
const Tim3D = lazy(() => import("./Tim3D/Tim3D"));
const Flowers = lazy(() => import("./Flowers/Flowers"));
import Rocket from "./Rocket/Rocket";
import Trees from "./Trees/Trees";
import Sun from "./Sun/Sun";
import Wally from "./Wally/Wally";
function Scene() {
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 44, position: [0, 10, 30], far: 300 }}
      shadows
    >
      <Suspense fallback={<Html center>Loading...</Html>}>
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
        <Sun />
        <Title />
        <RotateUI />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Screen />
        </Suspense>
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Wally />
        </Suspense>
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Tim3D />
        </Suspense>
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Flowers />
        </Suspense>
        <Rocket />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Trees />
        </Suspense>
      </Suspense>
    </Canvas>
  );
}

export default Scene;
