import * as THREE from "three";
import tim from "../../../assets/rotate.png";

export default function RotateUI() {
  const planeGeometry = new THREE.PlaneGeometry(1, 1);
  const textureLoader = new THREE.TextureLoader();
  const timTexture = textureLoader.load(tim);
  const rotateMaterial = new THREE.MeshBasicMaterial({
    map: timTexture,
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
  });
  timTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh
      geometry={planeGeometry}
      material={rotateMaterial}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, -8.7, 0]}
      scale={10}
    />
  );
}
