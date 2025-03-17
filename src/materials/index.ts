import * as THREE from "three";
import titleDiff from "../assets/title-diff.png";
import titleShadow from "../assets/title-shadow.png";
import splashAo from "../assets/splash-ao.png";

const textureLoader = new THREE.TextureLoader();
const titleDiffTexture = textureLoader.load(titleDiff);
const titleShadowTexture = textureLoader.load(titleShadow);
const splashAoTexture = textureLoader.load(splashAo);
splashAoTexture.flipY = false;

export const barcodeMaterial = new THREE.MeshStandardMaterial({
  emissive: new THREE.Color(0xffffff),
  emissiveIntensity: 1,
  metalness: 0.5,
  roughness: 0,
});

export const barcodeMaterialBack = new THREE.MeshBasicMaterial({
  color: 0x000000,
});

export const splashMaterial = new THREE.MeshBasicMaterial({
  aoMap: splashAoTexture,
});

export const planeMaterial = new THREE.MeshStandardMaterial({
  map: titleDiffTexture,
  emissiveMap: titleDiffTexture,
  emissive: new THREE.Color(0xffffff),
  transparent: true,
});

export const planeShadowMaterial = new THREE.MeshStandardMaterial({
  map: titleShadowTexture,
  transparent: true,
  opacity: 0.25,
});
