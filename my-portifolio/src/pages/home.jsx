
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
  FaFacebook,
  FaEye,
  FaArrowDown,
} from "react-icons/fa";

import Scene from "../components/3d/Scene";

const texts = [
  "Web 3.0 Engineer",
  "Smart Contract Engineer",
  "Blockchain Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Relational Database Engineer",
  "Website Engineer",
  "React Expert",
  "UI/UX Enthusiast",
  "Graphic Designer",
  "Full Stack Specialist",
  "Cybersecurity Specialist",
  "Defensive & Offensive Security",
  "YouTuber",
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: { opacity: 0, y: 20, rotateX: -20 },
    center: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -20, rotateX: 20 },
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/niyomugaboetiene",
      label: "GitHub",
      hover: "hover:bg-gray-600",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/niyomugabo-etiene-86310a44b",
      label: "LinkedIn",
      hover: "hover:bg-blue-600",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/250728184299",
      label: "WhatsApp",
      hover: "hover:bg-green-600",
    },
  ];

  // Reusable 3D button animation
  const buttonHover = {
    y: -5,
    scale: 1.04,
    rotateX: -5,
    rotateY: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  const buttonTap = {
    scale: 0.96,
    rotateX: 2,
    transition: { duration: 0.1 },
  };

  const buttonStyle = {
    transformPerspective: 1000,
    transformStyle: "preserve-3d",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Existing 3D Background */}
      <Scene />

      {/* Background gradients for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT: HERO CONTENT */}
          <div className="max-w-2xl text-center lg:text-left">

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-sm font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with metallic 3D appearance */}
            <motion.h1
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformPerspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
            >
              Hi, I'm

              <motion.span
                initial={{ opacity: 0, z: -40 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: -3,
                  scale: 1.025,
                }}
                style={{
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 5px 18px rgba(0, 217, 255, 0.18))",
                }}
                className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 cursor-default"
              >
                Niyomugabo
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-white mt-1"
                style={{
                  textShadow: "0 5px 20px rgba(255,255,255,0.12)",
                }}
              >
                Etiene.
              </motion.span>
            </motion.h1>

            {/* Animated professional titles */}
            <div
              className="h-14 sm:h-16 flex items-center justify-center lg:justify-start mt-5 overflow-hidden"
              style={{ perspective: "800px" }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTextIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400"
                >
                  {texts[currentTextIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4"
            >
              I create beautiful, modern decentralized applications,
              AI-based applications, ML-based applications, and
              responsive websites using modern technologies.

              <br /><br />

              My objective is to solve real-world problems through code.
            </motion.p>

            {/* 3D Glass Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-9 justify-center lg:justify-start"
              style={{ perspective: "1000px" }}
            >

              {/* View Projects */}
              <motion.a
                href="/#projects"
                whileHover={buttonHover}
                whileTap={buttonTap}
                style={buttonStyle}
                className="group relative overflow-hidden px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 transition-all duration-300 border border-cyan-300/30 backdrop-blur-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />

                <span className="relative z-10 flex items-center gap-3 [transform:translateZ(20px)]">
                  <FaEye />
                  View My Work
                </span>

                <span className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/resume/Etiene_Niyomugabo.pdf"
                download
                whileHover={buttonHover}
                whileTap={buttonTap}
                style={buttonStyle}
                className="group relative overflow-hidden px-7 py-4 rounded-xl border border-cyan-400/60 bg-white/5 hover:bg-cyan-400/10 text-cyan-300 font-semibold flex items-center justify-center gap-3 backdrop-blur-xl transition-all duration-300 shadow-lg shadow-cyan-500/5"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-300/15 via-transparent to-purple-400/10 opacity-60 pointer-events-none" />

                <span className="relative z-10 flex items-center gap-3 [transform:translateZ(20px)]">
                  <FaFileDownload />
                  Download CV
                </span>

                <span className="absolute inset-0 rounded-xl border border-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.a>

            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >

              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{
                    y: -6,
                    scale: 1.12,
                    rotateX: -8,
                    rotateY: 8,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformPerspective: 700,
                    transformStyle: "preserve-3d",
                  }}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-xl ${social.hover} hover:border-transparent transition-colors duration-300 backdrop-blur-md shadow-lg`}
                >
                  <span className="[transform:translateZ(12px)]">
                    {social.icon}
                  </span>
                </motion.a>
              ))}

              {/* Facebook placeholder */}
              <motion.a
                href="#contact"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{
                  y: -6,
                  scale: 1.12,
                  rotateX: -8,
                  rotateY: 8,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformPerspective: 700,
                  transformStyle: "preserve-3d",
                }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-xl hover:bg-blue-700 hover:border-transparent transition-colors duration-300 backdrop-blur-md shadow-lg"
              >
                <span className="[transform:translateZ(12px)]">
                  <FaFacebook />
                </span>
              </motion.a>

            </motion.div>

          </div>

          {/* RIGHT: SPACE RESERVED FOR 3D ORB */}
          <div className="hidden lg:block min-h-[450px]" />

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <FaArrowDown className="text-cyan-400" />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
