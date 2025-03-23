import * as THREE from "three";
import rocket from "../../../assets/rocket.png";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Rocket() {
  const planeGeometry = new THREE.PlaneGeometry(1, 1.6);
  const textureLoader = new THREE.TextureLoader();
  const rocketTexture = textureLoader.load(rocket);

  const rocketMaterial = new THREE.MeshBasicMaterial({
    map: rocketTexture,
    transparent: true,
    opacity: 1,
  });

  const rocketRef = useRef<THREE.Group>(null);

  useFrame(() => {
    rocketRef.current!.rotation.z += 0.01;
  });

  return (
    <group ref={rocketRef} position={[0, -60, 0]}>
      <mesh
        geometry={planeGeometry}
        material={rocketMaterial}
        rotation={[-Math.PI * 0, -Math.PI * 0.17, 0]}
        position={[80, 0.5, -50.3]}
        scale={5}
      />
    </group>
  );
}
