import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaTimes,
  FaSun,
  FaMoon
} from "react-icons/fa";
import Avatar from "../assets/github.jpeg";
const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  const navItems = [
    { name: "Home", target: "home", icon: <FaHome /> },
    { name: "About", target: "about", icon: <FaUser /> },
    { name: "Skills", target: "skills", icon: <FaCode /> },
    { name: "Projects", target: "projects", icon: <FaProjectDiagram /> },
    { name: "Contact Me", target: "contact", icon: <FaEnvelope /> },
  ];

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   const currentTheme = saved || "dark";
  //   setTheme(currentTheme);
  //   if (currentTheme === 'light') {
  //     document.documentElement.classList.add('light')
  //     document.documentElement.classList.dark('dark')
  //   }
  // })

  const ToogleTheme =  () => {
    const html = 
  }
  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // center of screen

      navItems.forEach(item => {
        const section = document.getElementById(item.target);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(item.target);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/95 via-black/95 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex hover:opacity-80 items-center gap-3"
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-cyan-500 object-cover hover:border-cyan-400 transition-all duration-300"
              src={Avatar}
              alt="Etiene avatar"
            />
            <span className="text-white font-medium hidden md:inline-block text-xl bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Etiene
            </span>
          </motion.div>

          <div className="hidden md:flex gap-4 ml-auto">
            {navItems.map(item => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-[15px] font-medium transition-all duration-300 cursor-pointer
                  ${activeSection === item.target
                    ? "text-cyan-400 "
                    : "text-gray-300 hover:text-cyan-500  transition duration-500"
                  }`}
                onClick={handleNavClick}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
            <div className="mt-3">
              <button> <FaSun className="text-xl text-cyan-500 hover:text-white transition-colors"/> </button>
            </div>
          </div>

          <motion.button
            className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="px-4 py-3 flex flex-col space-y-2">
              {navItems.map(item => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer
                    ${activeSection === item.target
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                    }`}
                  onClick={handleNavClick}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
