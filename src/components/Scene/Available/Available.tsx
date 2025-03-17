import "./Available.css";
import { Html } from "@react-three/drei";

export default function Available() {
  return (
    <group position={[1, 11, -1]}>
      <Html className="available">
        <h2>Tim Simms</h2>
        <h1>React | Node | GraphQL</h1>
        <h2>Available</h2>
      </Html>
    </group>
  );
}
