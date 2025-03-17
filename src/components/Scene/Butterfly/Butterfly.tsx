import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

export default function Butterfly() {
  const butterfly = useLoader(GLTFLoader, "./models/animated_butterfly.glb");

  butterfly.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      node.material.emissiveIntensity = 1;
    }
  });
  const butterflyAnimations = useAnimations(
    butterfly.animations || [],
    butterfly.scene
  );
  const action = butterflyAnimations.actions["Flying"];
  useEffect(() => {
    if (action) {
      action.play();
    }
  }, [action]);

  return <primitive object={butterfly.scene} />;
}
