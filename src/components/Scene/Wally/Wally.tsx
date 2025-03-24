import * as THREE from "three";
import wally from "../../../assets/waldo.png";

export default function Sun() {
  const planeGeometry = new THREE.PlaneGeometry(1, 2);
  const textureLoader = new THREE.TextureLoader();
  const blurTexture = textureLoader.load(wally);
  blurTexture.colorSpace = THREE.SRGBColorSpace;

  const blurMaterial = new THREE.MeshBasicMaterial({
    map: blurTexture,
    transparent: true,
    opacity: 1,
    depthWrite: false,
  });

  return (
    <>
      <mesh
        geometry={planeGeometry}
        material={blurMaterial}
        rotation={[-Math.PI * 0, Math.PI * 0.6, 0]}
        position={[-45, -6, 12]}
        scale={3}
      />
    </>
  );
}
