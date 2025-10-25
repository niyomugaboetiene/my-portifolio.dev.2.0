import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaWhatsapp } from "react-icons/fa";
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
    "Full Stack Specialist"
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
      <div className="absolute inset-0 bg-black/70"></div>
   
     <div className="ms-[200px]">
      <div className="relative z-10 max-w-6xl w-[800px]  md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-center ms-[250px] text-cyan-500">Hi, I'm</span> 
            <div>
                <span className="text-cyan-500 ms-[70px]">Niyomugabo Etiene</span>
            </div>
          </motion.h1>

          <div className="h-16 relative overflow-hidden ms-[200px]">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                className="text-sm md:text-lg font-semibold text-gray-300"
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
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I create beautiful, modern decentralized applications, decentralized exchanges, and responsive websites using React, 
            Tailwind CSS, Node.js, and Solidity. Passionate about crafting exceptional user experiences.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4 ms-[150px]">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-semibold transition duration-300 text-center"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/resume/Etiene_Niyomugabo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-transparent border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600/20 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            >
              <FaFileDownload /> Download CV
            </motion.a>
          </div>

          <motion.div
            className="flex gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="https://github.com/nietiene"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300"
            >
              <FaGithub className="text-white text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition duration-300"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
            <a
              href="https://wa.me/+250728184299"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-500 rounded-full transition duration-300"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
          </motion.div>
        </div>
     </div>

      </div>
    </section>
  );
};

export default Home;
