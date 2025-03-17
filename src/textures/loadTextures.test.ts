import { loadTextures, Textures } from "./loadTextures";
import * as THREE from "three";

jest.mock("three", () => ({
  TextureLoader: jest.fn().mockImplementation(() => ({
    load: jest.fn().mockReturnValue({}),
  })),
  Texture: jest.fn(),
}));

describe("loadTextures", () => {
  it("should load rotateTexture", () => {
    const textures: Textures = loadTextures();
    expect(textures.rotateTexture).toBeDefined();
    expect(THREE.TextureLoader).toHaveBeenCalled();
  });
});
