
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Orb = () => {
  const orbRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.18;
      orbRef.current.rotation.x += delta * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.12;
      ringRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={0.5}
    >
      <group position={[1.8, 0, 0]}>

        {/* Main glowing orb */}
        <mesh ref={orbRef}>
          <icosahedronGeometry args={[1.15, 5]} />

          <meshPhysicalMaterial
            color="#071a35"
            emissive="#087cff"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Inner energy core */}
        <mesh scale={0.72}>
          <sphereGeometry args={[1, 48, 48]} />

          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.18}
          />
        </mesh>

        {/* Outer transparent shell */}
        <mesh scale={1.25}>
          <sphereGeometry args={[1, 48, 48]} />

          <meshBasicMaterial
            color="#00bfff"
            transparent
            opacity={0.07}
            wireframe
          />
        </mesh>

        {/* Orbital ring */}
        <mesh ref={ringRef} rotation={[1.1, 0.3, 0]}>
          <torusGeometry args={[1.65, 0.012, 16, 160]} />

          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Secondary orbital ring */}
        <mesh rotation={[0.5, 0.8, 1.2]}>
          <torusGeometry args={[1.85, 0.008, 12, 160]} />

          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.65}
          />
        </mesh>

      </group>
    </Float>
  );
};

export default Orb;
