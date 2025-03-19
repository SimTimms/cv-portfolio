import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import { splashMaterial } from "../../../materials";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import addMouseListener from "../../../utils/addMouseListener";

export default function Splash() {
  const splash = useLoader(GLTFLoader, "./models/splash.glb");
  const splashRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!splashRef.current) return;
    addMouseListener((x) => {
      if (splashRef.current)
        splashRef.current.rotation.y = Math.PI * 0.6 + x * 0.4;
    });
  }, [splashRef.current]);

  splash.scene.traverse(function (node: any) {
    if (!(node instanceof THREE.Mesh)) return;
    node.material = splashMaterial;
    node.receiveShadow = true;
    node.castShadow = true;
  });

  return (
    <group ref={splashRef} rotation={[0, Math.PI * 0.6, 0]}>
      <primitive
        object={splash.scene}
        scale={3}
        position={[0, 0, -1]}
        material={splashMaterial}
      />
    </group>
  );
}
