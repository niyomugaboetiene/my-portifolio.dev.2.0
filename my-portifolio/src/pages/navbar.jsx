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
  FaMoon,
  FaBars
} from "react-icons/fa";
import Avatar from "../assets/github.jpeg";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", target: "home", icon: <FaHome /> },
    { name: "About", target: "about", icon: <FaUser /> },
    { name: "Skills", target: "skills", icon: <FaCode /> },
    { name: "Projects", target: "projects", icon: <FaProjectDiagram /> },
    { name: "Contact", target: "contact", icon: <FaEnvelope /> },
  ];

  // Handle theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const html = document.documentElement;
    
    if (savedTheme === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
    }
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  // Handle scroll for active section and background
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background opacity
      setScrolled(window.scrollY > 20);

      // Set active section
      const scrollPos = window.scrollY + window.innerHeight / 3;

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
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setActiveSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Avatar */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
            onClick={() => handleNavClick("home")}
          >
            <img
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-cyan-500 object-cover"
              src={Avatar}
              alt="Etiene avatar"
            />
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg sm:text-xl hidden sm:inline-block">
              Etiene
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map(item => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-300
                  ${activeSection === item.target
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                onClick={() => handleNavClick(item.target)}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="text-lg sm:text-xl" />
              ) : (
                <FaMoon className="text-lg sm:text-xl" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                    ${activeSection === item.target
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  onClick={() => handleNavClick(item.target)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400"
                >
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    {theme === 'dark' ? (
                      <FaSun className="text-xl" />
                    ) : (
                      <FaMoon className="text-xl" />
                    )}
                  </div>
                  <span className="font-medium">
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;