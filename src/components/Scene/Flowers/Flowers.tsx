import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
export default function Flowers() {
  const flowers = useLoader(GLTFLoader, "./models/flowers.glb");

  const material = new THREE.MeshBasicMaterial({
    color: "#eee",
  });

  flowers.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      const random = Math.random();
      if (random > 0.66) {
        node.material = material;
      } else if (random > 0.33) {
        node.material = material;
      } else {
        node.material = material;
      }
    }
  });

  return (
    <group>
      <primitive object={flowers.scene} scale={3} position={[7, -9, 4]} />
      <primitive
        object={flowers.scene.clone()}
        scale={3}
        position={[0, -9, 12]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}
