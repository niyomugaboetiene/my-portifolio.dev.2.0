
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
  FaFacebook,
  FaEye,
  FaArrowDown
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
  "YouTuber"
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
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/niyomugaboetiene",
      label: "GitHub",
      hover: "hover:bg-gray-600"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/niyomugabo-etiene-86310a44b",
      label: "LinkedIn",
      hover: "hover:bg-blue-600"
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/250728184299",
      label: "WhatsApp",
      hover: "hover:bg-green-600"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* 3D Background */}
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
            >
              Hi, I'm

              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Niyomugabo
              </span>

              <span className="block text-white mt-1">
                Etiene.
              </span>
            </motion.h1>

            {/* Animated professional titles */}
            <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start mt-5 overflow-hidden">

              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTextIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
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

              My objective is to solve real-world problems through code.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-9 justify-center lg:justify-start"
            >

              {/* View Projects */}
              <motion.a
                href="/#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 transition-all duration-300"
              >
                <FaEye />
                View My Work
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/resume/Etiene_Niyomugabo.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-xl border border-cyan-400/60 bg-white/5 hover:bg-cyan-400/10 text-cyan-300 font-semibold flex items-center justify-center gap-3 backdrop-blur-md transition-all duration-300"
              >
                <FaFileDownload />
                Download CV
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
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-xl ${social.hover} hover:border-transparent transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}

              {/* Facebook placeholder: replace with your actual profile URL */}
              <motion.a
                href="#contact"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-xl hover:bg-blue-700 hover:border-transparent transition-colors duration-300"
              >
                <FaFacebook />
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
              ease: "easeInOut"
            }
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
