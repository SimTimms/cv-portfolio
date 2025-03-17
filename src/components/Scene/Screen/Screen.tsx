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

export default function Screen() {
  const screen = useLoader(GLTFLoader, "./models/tv.glb");
  const videoMaterial = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = bed;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();

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
    vidWorld.play();

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
    vidWorld.play();

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
    vidWorld.play();

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
      }
      if (node.name.indexOf("screen2") !== -1) {
        node.material = videoMaterialRoom;
      }
      if (node.name.indexOf("screen4") !== -1) {
        node.material = videoMaterialWorld;
      }
      if (node.name === "screen") {
        node.material = videoMaterialTamagotchi;
      }
    }
  });

  return (
    <group position={[-10, -8, 0]}>
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
        <Shadow />
      </group>
      <Projects />
    </group>
  );
}
