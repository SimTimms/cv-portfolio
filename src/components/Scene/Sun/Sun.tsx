import * as THREE from "three";
import sun from "../../../assets/sun.png";
import sunBlur from "../../../assets/sunBlur.png";

export default function Sun() {
  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const textureLoader = new THREE.TextureLoader();
  const projectsTexture = textureLoader.load(sun);
  const blurTexture = textureLoader.load(sunBlur);
  blurTexture.colorSpace = THREE.SRGBColorSpace;
  projectsTexture.colorSpace = THREE.SRGBColorSpace;

  const humanMaterial = new THREE.MeshBasicMaterial({
    map: projectsTexture,
    transparent: true,
    opacity: 1,
    depthWrite: false,
  });
  const blurMaterial = new THREE.MeshStandardMaterial({
    map: blurTexture,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    roughness: 0,
  });

  return (
    <>
      <mesh
        geometry={planeGeometry}
        material={humanMaterial}
        rotation={[-Math.PI * 0, 0, 0]}
        position={[-30, -44.5, -150]}
        scale={7}
      />
      <mesh
        geometry={planeGeometry}
        material={blurMaterial}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.032]}
        position={[-8, -9.2, -36]}
        scale={2.3}
      />
    </>
  );
}
