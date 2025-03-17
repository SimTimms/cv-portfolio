import { Vector3 } from "three";

export const orbitPositions = (
  delta: number,
  speed: number,
  distance: number,
  objectPosition: Vector3
): { x: number; z: number } => {
  const currentPos = objectPosition;
  let angleInDegrees = Math.atan2(currentPos.z, currentPos.x) * (180 / Math.PI);
  angleInDegrees += delta * speed;
  var radians = angleInDegrees * (Math.PI / 180);

  var x = Math.cos(radians) * distance;
  var z = Math.sin(radians) * distance;
  return { x, z };
};
