import { useRef, useState } from "react";
import * as THREE from "three";
import { Vector3, CatmullRomCurve3 } from "three";

export default function TimerLine() {
  const [path] = useState<Vector3[]>([
    new Vector3(-1, 0, 0),
    new Vector3(0, 0.2, 0),
    new Vector3(1, 0, 0),
  ]);

  const curveRef = useRef<any>(null);

  const curve = new CatmullRomCurve3(path, false, "catmullrom", 0.5);

  const points = curve.getPoints(100);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line ref={curveRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial attach="material" />
    </line>
  );
}
