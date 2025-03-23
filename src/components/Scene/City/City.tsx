import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import ao from "../../../assets/ao.png";
import cityDiff from "../../../assets/city-diff.png";
import cityEmissive from "../../../assets/city-emissive.png";
import wall from "../../../assets/wall.png";
export default function City() {
  const textureLoader = new THREE.TextureLoader();
  const projectsTexture = textureLoader.load(ao);
  const cityDiffTexture = textureLoader.load(cityDiff);
  const cityEmissiveTexture = textureLoader.load(cityEmissive);
  const wallTexture = textureLoader.load(wall);
  wallTexture.flipY = false;
  cityEmissiveTexture.flipY = false;
  projectsTexture.flipY = false;
  cityDiffTexture.flipY = false;
  const city = useLoader(GLTFLoader, "./models/city.glb");
  const material = new THREE.MeshStandardMaterial({
    emissiveMap: cityEmissiveTexture,
    emissiveIntensity: 0.5,
    emissive: "#d431bb",
  });
  const roadMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
    emissiveIntensity: 0.5,
    emissive: "#fff",
  });
  const riverMaterial = new THREE.MeshStandardMaterial({
    color: "#d431bb",
    roughness: 0,
    emissiveIntensity: 10.5,
    emissive: "#d431bb",
  });
  const wallMaterial = new THREE.MeshStandardMaterial({
    map: wallTexture,
  });

  city.scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      if (node.name === "rivers") {
        node.material = riverMaterial;
      } else if (node.name === "roads") {
        node.material = roadMaterial;
      } else if (node.name === "walls") {
        node.material = wallMaterial;
      } else {
        node.material = material;
      }
    }
    node.receiveShadow = true;
    node.castShadow = true;
  });
  return <primitive object={city.scene} scale={0.6} position={[0, -10, 0]} />;
}
