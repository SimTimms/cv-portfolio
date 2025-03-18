import "./Tim.css";
import tim from "../../../assets/tim.png";
import * as THREE from "three";

export default function Tim() {
  const textureLoader = new THREE.TextureLoader();
  const timTexture = textureLoader.load(tim);
  timTexture.colorSpace = THREE.SRGBColorSpace;
  const planeGeometry = new THREE.PlaneGeometry(1.04, 1.4);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: timTexture,
    transparent: true,
    depthWrite: false,
  });

  const planeMaterialBack = new THREE.MeshBasicMaterial({
    map: timTexture,
    transparent: true,
    depthWrite: false,
    color: 0x000000,
    side: THREE.DoubleSide,
  });

  return (
    <group>
      <mesh geometry={planeGeometry} material={planeMaterial} scale={14} />
      <mesh
        geometry={planeGeometry}
        material={planeMaterialBack}
        scale={14}
        position={[0, 0, -0.01]}
      />
    </group>
  );
}
