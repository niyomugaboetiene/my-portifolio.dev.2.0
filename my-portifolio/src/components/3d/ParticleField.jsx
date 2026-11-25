
import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = ({ count = 1200 }) => {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      data[i * 3] = (Math.random() - 0.5) * 25;
      data[i * 3 + 1] = (Math.random() - 0.5) * 18;
      data[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return data;
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.008;
    pointsRef.current.rotation.x += delta * 0.003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#65dfff"
        size={0.025}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
