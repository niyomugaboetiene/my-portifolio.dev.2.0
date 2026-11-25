
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CameraRig = ({ scrollProgress, mouse }) => {
  const { camera } = useThree();

  const target = useRef(new THREE.Vector3(0, 0, 8));

  useFrame((state, delta) => {
    const progress = scrollProgress.current;

    // Camera travels through the 3D environment.
    const x = THREE.MathUtils.lerp(0, -1.5, progress);
    const y = THREE.MathUtils.lerp(0, 0.8, progress);
    const z = THREE.MathUtils.lerp(8, 6, progress);

    target.current.set(
      x + mouse.current.x * 0.25,
      y + mouse.current.y * 0.2,
      z
    );

    // Frame-rate independent smooth movement.
    const smooth = 1 - Math.exp(-3 * delta);

    camera.position.lerp(target.current, smooth);

    camera.lookAt(
      0,
      0,
      0
    );
  });

  return null;
};

export default CameraRig;
