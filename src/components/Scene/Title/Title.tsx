import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import {
  barcodeMaterial,
  barcodeMaterialBack,
  planeMaterial,
  planeShadowMaterial,
} from "../../../materials";
import * as THREE from "three";
import Butterfly from "../Butterfly/Butterfly";

export default function Tim() {
  const barcode = useLoader(GLTFLoader, "./models/barcode.glb");
  const planeGeometry = new THREE.PlaneGeometry(1, 0.2);

  barcode.scene.traverse(function (node: any) {
    if (!(node instanceof THREE.Mesh)) return;
    if (node.name === "front") {
      node.material = barcodeMaterial;
    } else {
      node.material = barcodeMaterialBack;
    }
  });

  return (
    <group position={[0, -3, 1]}>
      <group
        position={[-5, 4, 1.3]}
        rotation={[-Math.PI * 0.5, -Math.PI * 0.15, -Math.PI]}
        scale={0.5}
      >
        <Butterfly />
      </group>
      <primitive
        object={barcode.scene}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={[1, 0.8, 1.1]}
        position={[0, 3.4, 1]}
      />
      <mesh
        geometry={planeGeometry}
        material={planeMaterial}
        scale={10}
        position={[0, 3, 2]}
      />
      <mesh
        geometry={planeGeometry}
        material={planeShadowMaterial}
        position={[0, 2.4, 0.6]}
        scale={12}
      />
    </group>
  );
}
