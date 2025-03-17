import * as THREE from "three";
import shadow from "../../../assets/shadow.png";

export default function Shadow() {
  const planeGeometry = new THREE.PlaneGeometry(1, 1);
  const textureLoader = new THREE.TextureLoader();
  const shadowTexture = textureLoader.load(shadow);
  const shadowMaterial = new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    opacity: 0.6,
  });

  return (
    <mesh
      geometry={planeGeometry}
      material={shadowMaterial}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, -10, 0]}
      scale={4}
    />
  );
}
