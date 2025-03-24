import * as THREE from "three";
import sun from "../../../assets/sun.png";

export default function Sun() {
  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const textureLoader = new THREE.TextureLoader();
  const projectsTexture = textureLoader.load(sun);
  projectsTexture.colorSpace = THREE.SRGBColorSpace;

  const humanMaterial = new THREE.MeshBasicMaterial({
    map: projectsTexture,
    transparent: true,
    opacity: 1,
    depthWrite: false,
  });

  return (
    <>
      <mesh
        geometry={planeGeometry}
        material={humanMaterial}
        rotation={[-Math.PI * 0, 0, 0]}
        position={[0, -44.5, -150]}
        scale={20}
      />
    </>
  );
}
