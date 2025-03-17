import * as THREE from "three";
const TextureLoader = new THREE.TextureLoader();

export type Textures = {
  rotateTexture: THREE.Texture;
};

export const loadTextures = (): Textures => {
  const rotateTexture = TextureLoader.load("./textures/rotate.png");

  return {
    rotateTexture,
  };
};
