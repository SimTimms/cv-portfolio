import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  barcodeMaterial,
  barcodeMaterialBack,
  splashMaterial,
  planeMaterial,
  planeShadowMaterial,
} from "../../../materials";
import * as THREE from "three";
import Butterfly from "../Butterfly/Butterfly";
import { useRef } from "react";
import Available from "../Available/Available";

export default function Tim() {
  const barcode = useLoader(GLTFLoader, "./models/barcode.glb");
  const splash = useLoader(GLTFLoader, "./models/splash.glb");
  const planeGeometry = new THREE.PlaneGeometry(1, 0.2);
  const splashRef = useRef<THREE.Mesh>(null);

  barcode.scene.traverse(function (node: any) {
    if (!(node instanceof THREE.Mesh)) return;
    if (node.name === "front") {
      node.material = barcodeMaterial;
    } else {
      node.material = barcodeMaterialBack;
    }
  });

  splash.scene.traverse(function (node: any) {
    if (!(node instanceof THREE.Mesh)) return;
    node.material = splashMaterial;
    node.receiveShadow = true;
    node.castShadow = true;
  });

  useFrame((_, delta) => {
    if (!splashRef.current) return;
    splashRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <group position={[0, 0, 1]}>
      <Available />
      <group
        position={[-5, 4, 0.3]}
        rotation={[-Math.PI * 0.5, -Math.PI * 0.15, -Math.PI]}
        scale={0.5}
      >
        <Butterfly />
      </group>

      <primitive
        object={barcode.scene}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={[1, 0.8, 1.1]}
        position={[0, 3.4, 0]}
      />
      <group ref={splashRef}>
        <primitive
          object={splash.scene}
          scale={3}
          position={[0, 0, -1]}
          material={splashMaterial}
        />
      </group>
      <mesh
        geometry={planeGeometry}
        material={planeMaterial}
        scale={10}
        position={[0, 3, 0]}
      />
      <mesh
        geometry={planeGeometry}
        material={planeShadowMaterial}
        position={[0, 3, -0.1]}
        scale={12}
      />
    </group>
  );
}
