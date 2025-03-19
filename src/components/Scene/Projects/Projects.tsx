import * as THREE from "three";
import projects from "../../../assets/projects.png";
import { ActionContext, SCENES } from "../../../App";

export default function Projects() {
  const planeGeometry = new THREE.PlaneGeometry(1, 0.2);
  const textureLoader = new THREE.TextureLoader();
  const projectsTexture = textureLoader.load(projects);
  const rotateMaterial = new THREE.MeshBasicMaterial({
    map: projectsTexture,
    transparent: true,
    opacity: 1,
  });

  return (
    <ActionContext.Consumer>
      {({ setSceneNumber }) => (
        <mesh
          geometry={planeGeometry}
          material={rotateMaterial}
          rotation={[-Math.PI * 0.5, 0, Math.PI * 0.16]}
          position={[3.3, -1.1, 3.3]}
          scale={4}
          onPointerUp={() => setSceneNumber(SCENES.PROJECTS)}
        />
      )}
    </ActionContext.Consumer>
  );
}
