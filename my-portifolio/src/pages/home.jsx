
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
  FaEye
} from "react-icons/fa";

import image from "../assets/DSC_0511.JPG"
function Portrait() {
  const group = useRef();

  const texture = useTexture(image);

  useFrame((state, delta) => {
    if (group.current) {
      const targetY = state.pointer.x * 0.3;
      const targetX = -state.pointer.y * 0.2;

      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetY,
        4,
        delta
      );

      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetX,
        4,
        delta
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.12} floatIntensity={0.4}>
      <group ref={group}>


        <mesh position={[0, 0, -0.08]}>
          <boxGeometry args={[2.85, 3.55, 0.15]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#0077aa"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[2.7, 3.4]} />
          <meshBasicMaterial
            map={texture}
            toneMapped={false}
          />
        </mesh>

        <mesh position={[0, 0, -0.2]} rotation={[0.5, 0.3, 0]}>
          <torusGeometry args={[2.1, 0.012, 16, 120]} />
          <meshBasicMaterial color="#00d9ff" />
        </mesh>

      </group>
    </Float>
  );
}

function ThreeDScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={2} />

      <Portrait />
    </Canvas>
  );
}

const texts = [
  "Web 3.0 Engineer",
  "NLP Engineer",
  "Data Scientist",
  "AI Agent Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Cybersecurity Specialist",
  "Video Editor",
  "YouTuber"
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) =>
        (prev + 1) % texts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden
      bg-[#050816] text-white flex items-center"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10
        blur-[120px] rounded-full top-10 left-10" />

        <div className="absolute w-96 h-96 bg-purple-500/10
        blur-[120px] rounded-full bottom-10 right-10" />

        <div className="absolute inset-0 opacity-10
        bg-[radial-gradient(#00d9ff_1px,transparent_1px)]
        [background-size:35px_35px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto
      px-6 lg:px-12 w-full grid grid-cols-1
      lg:grid-cols-2 items-center gap-10 py-20">

        <div className="text-center lg:text-left space-y-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-semibold tracking-[4px]"
          >
            HELLO, WORLD! I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Niyomugabo
            <span className="block text-cyan-400">
              Etiene
            </span>
          </motion.h1>

          <div className="h-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-bold
                bg-gradient-to-r from-cyan-400
                via-purple-400 to-blue-400
                text-transparent bg-clip-text"
              >
                {texts[currentTextIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 text-base md:text-lg
          leading-relaxed max-w-xl mx-auto lg:mx-0">
            I create beautiful, modern decentralized
            applications, AI-based applications,
            machine learning solutions and responsive
            websites using modern technologies.
            My objective is solving real-world problems
            through code.
          </p>

          <div className="flex flex-wrap justify-center
          lg:justify-start gap-4 pt-4">

            <motion.a
              href="/#projects"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl
              bg-cyan-500 hover:bg-cyan-600
              flex items-center gap-2 font-semibold
              shadow-lg shadow-cyan-500/20"
            >
              <FaEye /> View My Work
            </motion.a>

            <motion.a
              href="/resume/Etiene_Niyomugabo.pdf"
              download
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl border
              border-cyan-400 text-cyan-400
              hover:bg-cyan-400/10
              flex items-center gap-2 font-semibold"
            >
              <FaFileDownload /> Download CV
            </motion.a>

          </div>

          <div className="flex justify-center
          lg:justify-start gap-5 pt-6">

            <a
              href="https://github.com/niyomugaboetiene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300
              hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/niyomugabo-etiene-86310a44b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300
              hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/250728184299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300
              hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[420px]
          md:h-[550px] flex items-center justify-center"
        >

          <div className="absolute w-72 h-72 md:w-96
          md:h-96 rounded-full bg-cyan-500/10
          blur-[90px]" />

          <ThreeDScene />

          <div className="absolute bottom-3 text-xs
          tracking-[4px] text-cyan-400/70">
            INTERACTIVE 3D PORTRAIT
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Home;

/*
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaWhatsapp, FaFacebook, FaEye } from "react-icons/fa";
import background from "../../public/background.jpg";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Web 3.0 Engineer",
    "Smart Contract Eng",
    "Blockchain Eng",
    "Machine Learning Eng",
    "Deep Learning Eng",
    "Relational DB Eng",
    "Website Eng",
    "React Expert",
    "UI/UX Enthusiast",
    "Graphic Designer",
    "Full Stack Specialist",
    "Cyber security Specialist",
    "Defensive & Offsensive Security",
    "Youtuber"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: { opacity: 0, y: 20, position: "absolute" },
    center: { opacity: 1, y: 0, position: "relative" },
    exit: { opacity: 0, y: -20, position: "absolute" },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-12 bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 dark:bg-black/70 bg-white/80"></div>
   
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-3xl text-center">
          
          <div className="space-y-6 sm:space-y-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 sm:mb-4">
                <span className="text-sm sm:text-base text-cyan-500 dark:text-cyan-300 font-medium">
                  Hi, I'm
                </span>
              </div>
              <div>
                <span className="dark:text-cyan-500 text-cyan-600 text-5xl sm:text-6xl md:text-7xl">
                  Niyomugabo Etiene
                </span>
              </div>
            </motion.h1>

            <div className="h-16 sm:h-20 relative overflow-hidden flex justify-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTextIndex}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {texts[currentTextIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              className="dark:text-gray-300 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I create beautiful, modern decentralized applications, AI based Application, ML-Based Appication, and responsive websites using 
              modern Technologies. With objective of solving real-world problem using codes.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <motion.a
                href="/#projects"  
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition duration-300 flex justify-center items-center gap-2"
              >
                <FaEye /> View My Work
              </motion.a>

              <motion.a
                href="/resume/Etiene_Niyomugabo.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 dark:bg-transparent bg-transparent border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 dark:hover:bg-cyan-600/20 hover:bg-cyan-50 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
              >
                <FaFileDownload /> Download CV
              </motion.a>
            </div>

            <motion.div
              className="flex justify-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="https://github.com/niyomugaboetiene"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300 hover:translate-y-1"
              >
                <FaGithub className="text-white text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/niyomugabo-etiene-86310a44b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-gray-800 hover:bg-blue-600 rounded-full transition duration-300 hover:translate-y-1"
              >
                <FaLinkedin className="text-white text-lg sm:text-xl" />
              </a>
              <a
                href="https://wa.me/+250728184299"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-gray-800 hover:bg-green-500 rounded-full transition duration-300 hover:translate-y-1"
              >
                <FaWhatsapp className="text-white text-lg sm:text-xl" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-gray-800 hover:bg-blue-700 rounded-full transition duration-300 hover:translate-y-1"
              >
                <FaFacebook className="text-white text-lg sm:text-xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
*/