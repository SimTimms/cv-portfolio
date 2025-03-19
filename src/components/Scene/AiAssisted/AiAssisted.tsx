import * as THREE from "three";
import aiAssisted from "../../../assets/ai-assisted.png";
import human from "../../../assets/human.png";

export default function AiAssisted() {
  const planeGeometry = new THREE.PlaneGeometry(2, 1);
  const textureLoader = new THREE.TextureLoader();
  const projectsTexture = textureLoader.load(aiAssisted);
  const humanTexture = textureLoader.load(human);
  const rotateMaterial = new THREE.MeshBasicMaterial({
    map: projectsTexture,
    transparent: true,
    opacity: 1,
  });

  const humanMaterial = new THREE.MeshBasicMaterial({
    map: humanTexture,
    transparent: true,
    opacity: 1,
  });

  return (
    <>
      <mesh
        geometry={planeGeometry}
        material={humanMaterial}
        rotation={[-Math.PI * 0, -Math.PI * 0.17, 0]}
        position={[29.3, 3.1, -3.3]}
        scale={8}
      />
      <mesh
        geometry={planeGeometry}
        material={rotateMaterial}
        rotation={[-Math.PI * 0.5, 0, -Math.PI * 0.16]}
        position={[26.3, -1.1, 5.3]}
        scale={10}
      />
    </>
  );
}
