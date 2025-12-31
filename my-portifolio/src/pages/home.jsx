import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaWhatsapp, FaFacebook } from "react-icons/fa";
import background from "../../public/background.jpg";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Web 3.0 Developer",
    "Smart Contract Dev",
    "Blockchain Dev",
    "Machine Learning Dev",
    "Deep Learning Dev",
    "Relational DB Dev",
    "Website Dev",
    "React Expert",
    "UI/UX Enthusiast",
    "Graphic Designer",
    "Full Stack Specialist",
    "Cyber security Specialist",
    "Defensive & Offsensive Security",
    "Ethical Hacker"
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
              I create beautiful, modern decentralized applications, decentralized exchanges, and responsive websites using React, 
              Tailwind CSS, Node.js, and Solidity. Passionate about crafting exceptional user experiences.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition duration-300 text-center"
              >
                View My Work
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
                href="https://linkedin.com"
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