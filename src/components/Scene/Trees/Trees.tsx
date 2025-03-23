import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
export default function Trees() {
  const trees = useLoader(GLTFLoader, "./models/trees.glb");

  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    color: "#3b1537",
  });

  trees.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      node.material = material;
    }
  });

  return <primitive object={trees.scene} scale={3} position={[0, -9, 10]} />;
}
