import * as THREE from "three";
import shadow from "../../../assets/shadow.png";

interface ShadowProps {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
  opacity?: number;
}
export default function Shadow({
  position,
  scale,
  rotation,
  opacity,
}: ShadowProps) {
  const planeGeometry = new THREE.PlaneGeometry(1, 1);
  const textureLoader = new THREE.TextureLoader();
  const shadowTexture = textureLoader.load(shadow);
  const shadowMaterial = new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    opacity: opacity ? opacity : 0.6,
    depthWrite: false,
  });

  return (
    <mesh
      geometry={planeGeometry}
      material={shadowMaterial}
      rotation={rotation}
      position={position}
      scale={scale}
    />
  );
}
