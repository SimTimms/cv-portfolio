import { useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { gsap } from "gsap";
import Shadow from "../Shadow/Shadow";

export default function Tim3D() {
  const tim = useLoader(GLTFLoader, "./models/tim.glb");
  const groupRef = useRef<THREE.Group>(null);

  tim.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      node.material.emissiveIntensity = 1;
    }
  });
  const butterflyAnimations = useAnimations(tim.animations || [], tim.scene);
  const anims = {
    idle: "Idle",
    walk: "Walk",
    breathing: "Breathing",
  };
  const walkAction = butterflyAnimations.actions[anims.walk];
  const idleAction = butterflyAnimations.actions[anims.idle];
  const breathingAction = butterflyAnimations.actions[anims.breathing];

  useEffect(() => {
    if (walkAction && idleAction) {
      walkAction.play();
    }
  }, [walkAction]);

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        duration: 0,
        delay: 0.1,
        x: -30,
        y: -1.3,
        z: -26,
      });

      gsap.to(groupRef.current.position, {
        duration: 3,
        delay: 0.3,
        x: 0,
        y: -1.3,
        z: -18,
        ease: "none",
      });

      gsap.to(groupRef.current.rotation, {
        duration: 0.4,
        delay: 3.3,
        x: 0,
        y: 0,
        z: 0,
      });

      gsap.to(groupRef.current.position, {
        onComplete: () => {
          if (walkAction && breathingAction) {
            walkAction.stop();
            breathingAction.play();
          }
        },
        duration: 1.4,
        delay: 3.3,
        x: 0,
        y: -1.3,
        z: 0,
        ease: "none",
      });
    }
  }, [groupRef]);

  return (
    <group
      ref={groupRef}
      position={[-2000, -1.3, 0]}
      rotation={[0, Math.PI * 0.4, 0]}
    >
      <Shadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -8, 0]}
        scale={8}
        opacity={0.2}
      />
      <primitive object={tim.scene} scale={8} position={[0, -8, 0]} />
    </group>
  );
}
