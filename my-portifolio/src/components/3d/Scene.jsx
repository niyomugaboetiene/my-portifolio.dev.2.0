
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Orb from "./Orb";
import ParticleField from "./ParticleField";
import CameraRig from "./CameraRig";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const scrollProgress = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const animation = gsap.to(scrollProgress, {
      current: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    const handleMouseMove = (event) => {
      mouse.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);

      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#030712",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#030712"]} />

        <fog attach="fog" args={["#030712", 10, 25]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />

        <pointLight
          position={[5, 3, 5]}
          intensity={30}
          color="#00c8ff"
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={20}
          color="#8b5cf6"
        />

        <directionalLight
          position={[0, 5, 5]}
          intensity={1.5}
        />

        <Suspense fallback={null}>
          <CameraRig
            scrollProgress={scrollProgress}
            mouse={mouse}
          />

          <Orb />

          <ParticleField count={1200} />

          {/* Cinematic post-processing */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />

            <Vignette
              eskil={false}
              offset={0.15}
              darkness={0.8}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
