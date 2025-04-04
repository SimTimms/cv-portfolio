import "./Screen.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import Shadow from "../Shadow/Shadow";
import bed from "../../../assets/bed.mp4";
import world from "../../../assets/world.mp4";
import tamagotchi from "../../../assets/tamagotchi.mp4";
import room from "../../../assets/room.mp4";
import { useMemo } from "react";
import Projects from "../Projects/Projects";
import AiAssisted from "../AiAssisted/AiAssisted";
import { Html } from "@react-three/drei";
import { ActionContext, SCENES } from "../../../App";

export default function Screen() {
  const screen = useLoader(GLTFLoader, "./models/tv.glb");
  const videoMaterial = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = bed;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;

    const videoTexture = new THREE.VideoTexture(vid);
    videoTexture.flipY = false;
    videoTexture.repeat.set(1, 1);
    videoTexture.offset.set(0, 0);

    return new THREE.MeshBasicMaterial({
      map: videoTexture,
      side: THREE.FrontSide,
      toneMapped: false,
    });
  }, []);

  const videoMaterialWorld = useMemo(() => {
    const vidWorld = document.createElement("video");
    vidWorld.src = world;
    vidWorld.crossOrigin = "Anonymous";
    vidWorld.loop = true;
    vidWorld.muted = true;

    const videoTextureWorld = new THREE.VideoTexture(vidWorld);
    videoTextureWorld.flipY = false;
    videoTextureWorld.repeat.set(1, 1);
    videoTextureWorld.offset.set(0, 0);

    return new THREE.MeshBasicMaterial({
      map: videoTextureWorld,
      side: THREE.FrontSide,
      toneMapped: false,
    });
  }, []);

  const videoMaterialTamagotchi = useMemo(() => {
    const vidWorld = document.createElement("video");
    vidWorld.src = tamagotchi;
    vidWorld.crossOrigin = "Anonymous";
    vidWorld.loop = true;
    vidWorld.muted = true;

    const videoTextureWorld = new THREE.VideoTexture(vidWorld);
    videoTextureWorld.flipY = false;
    videoTextureWorld.repeat.set(1, 1);
    videoTextureWorld.offset.set(0, 0);

    return new THREE.MeshBasicMaterial({
      map: videoTextureWorld,
      side: THREE.FrontSide,
      toneMapped: false,
    });
  }, []);

  const videoMaterialRoom = useMemo(() => {
    const vidWorld = document.createElement("video");
    vidWorld.src = room;
    vidWorld.crossOrigin = "Anonymous";
    vidWorld.loop = true;
    vidWorld.muted = true;

    const videoTextureWorld = new THREE.VideoTexture(vidWorld);
    videoTextureWorld.flipY = false;
    videoTextureWorld.repeat.set(1, 1);
    videoTextureWorld.offset.set(0, 0);

    return new THREE.MeshBasicMaterial({
      map: videoTextureWorld,
      side: THREE.FrontSide,
      toneMapped: false,
    });
  }, []);

  screen.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      if (node.name.indexOf("screen3") !== -1) {
        node.material = videoMaterial;
      } else if (node.name.indexOf("screen2") !== -1) {
        node.material = videoMaterialRoom;
      } else if (node.name.indexOf("screen4") !== -1) {
        node.material = videoMaterialWorld;
      } else if (node.name === "screen") {
        node.material = videoMaterialTamagotchi;
      } else {
        node.material = new THREE.MeshStandardMaterial({
          color: 0x666666,
          roughness: 0.25,
          metalness: 0.5,
        });
      }
    }
  });

  return (
    <group position={[-13, -8, 0]}>
      <ActionContext.Consumer>
        {({ sceneNumber }) => {
          if (sceneNumber !== SCENES.PROJECTS) return null;
          return (
            <Html position={[-10, 4, 0]} className="html-label">
              <a href="https://tamagotchi-chi.vercel.app/" target="_blank">
                <b>Tama-not-chi</b>
              </a>
              <span>React | Three.js | Typescript</span>
            </Html>
          );
        }}
      </ActionContext.Consumer>
      <primitive
        object={screen.scene}
        scale={1.3}
        rotation={[0, Math.PI * 0.2, 0]}
      />
      <group
        position={[2.2, 8.8, -2]}
        rotation={[0, Math.PI * 0.3, 0]}
        scale={[4, 1, 2]}
      >
        <Shadow
          rotation={[-Math.PI * 0.5, 0, 0]}
          position={[0, -10, 0]}
          scale={4}
        />
      </group>
      <Projects />
      <AiAssisted />
    </group>
  );
}
