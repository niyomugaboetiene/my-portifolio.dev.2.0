import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaPython, FaPhp, FaDatabase, FaGitAlt,
  FaGithub, FaFigma, FaFileUpload, FaUserShield, FaPassport,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiFlask, SiDjango, SiMongodb,
  SiPostman, SiSocketdotio, SiJavascript, SiLaravel, SiSolidity, 
  SiEthers, SiRemix, SiFlutter, SiReact
} from "react-icons/si";

const Skills = () => {
  const VSCodeIcon = ({ className }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M127.987 0c70.69 0 128 57.31 128 128s-57.31 128-128 128S0 198.69 0 128 57.31 0 127.987 0z" fill="#0065A9"/>
      <path d="M83.002 105.226L63.001 123.14a5.001 5.001 0 000 7.71l20.001 17.913a5 5 0 006.622.03l91.064-81.616a2.5 2.5 0 000-3.77L89.623 31.799a2.5 2.5 0 00-3.28-.025l-20 17.889a5 5 0 00-.003 7.68l69.228 61.698-52.565 46.865z" fill="#007ACC"/>
      <path d="M173.048 200.516a5 5 0 01-3.283 1.242H87.5a2.5 2.5 0 01-2.5-2.5V149.39l48.335-42.93 39.713 35.416v56.13z" fill="#1F9CF0"/>
    </svg>
  );

  const DartIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 256 256"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0175C2" d="M128 0L256 128L128 256L0 128Z" />
      <path fill="#29B6F6" d="M128 0L128 256L0 128Z" />
    </svg>
  );

  // Skill categories
  const skillsCategories = [
    {
      name: "Frontend",
      items: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", level: 100, gradient: "from-orange-500 to-yellow-500" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", level: 90, gradient: "from-blue-500 to-indigo-500" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", level: 100, gradient: "from-yellow-500 to-amber-500" },
        { icon: <FaReact className="text-cyan-400" />, name: "React", level: 100, gradient: "from-cyan-500 to-blue-500" },
        { icon: <FaBootstrap className="text-purple-500" />, name: "Bootstrap", level: 75, gradient: "from-purple-500 to-pink-500" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind", level: 90, gradient: "from-cyan-500 to-teal-500" },
        { icon: <SiEthers className="text-green-300" />, name: "Ethers", level: 50, gradient: "from-green-500 to-emerald-500" },
      ]
    },
    {
      name: "Backend",
      items: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", level: 90, gradient: "from-green-500 to-emerald-500" },
        { icon: <SiExpress className="text-gray-300" />, name: "Express", level: 90, gradient: "from-gray-500 to-gray-700" },
        { icon: <SiFlask className="text-gray-300" />, name: "Flask", level: 50, gradient: "from-gray-400 to-gray-600" },
        { icon: <FaPython className="text-blue-400" />, name: "Python", level: 30, gradient: "from-blue-500 to-sky-500" },
        { icon: <SiDjango className="text-emerald-800" />, name: "Django", level: 30, gradient: "from-emerald-600 to-green-500" },
        { icon: <FaPhp className="text-indigo-500" />, name: "PHP", level: 80, gradient: "from-indigo-500 to-purple-500" },
        { icon: <SiLaravel className="text-red-600" />, name: "Laravel", level: 30, gradient: "from-red-500 to-pink-500" },
        { icon: <SiSolidity className="text-blue-500" />, name: "Solidity", level: 50, gradient: "from-blue-500 to-indigo-500" },
        { name: "Dart", icon: <DartIcon className="text-cyan-400" />, level: 70, gradient: "from-cyan-500 to-blue-500" },
      ]
    },
    {
      name: "Databases",
      items: [
        { icon: <FaDatabase className="text-amber-500" />, name: "MySQL", level: 90, gradient: "from-amber-500 to-orange-500" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB", level: 80, gradient: "from-green-500 to-emerald-500" },
      ]
    },
    {
      name: "Dev Tools",
      items: [
        { icon: <FaGitAlt className="text-orange-600" />, name: "Git", level: 100, gradient: "from-orange-500 to-red-500" },
        { icon: <FaGithub className="text-white" />, name: "GitHub", level: 90, gradient: "from-gray-700 to-gray-900" },
        { icon: <VSCodeIcon className="text-blue-500" />, name: "VS Code", level: 100, gradient: "from-blue-500 to-cyan-500" },
        { icon: <SiPostman className="text-orange-400" />, name: "Postman", level: 100, gradient: "from-orange-500 to-amber-500" },
        { icon: <SiRemix className="text-cyan-500" />, name: "Remix IDE", level: 100, gradient: "from-cyan-500 to-blue-500" },
        { icon: <FaFigma className="text-purple-400" />, name: "Figma", level: 50, gradient: "from-purple-500 to-pink-500" },
      ]
    },
    {
      name: "Mobile Apps",
      items: [
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" />, level: 20, gradient: "from-cyan-500 to-blue-500" },
        { name: "React Native", icon: <SiReact className="text-cyan-400" />, level: 70, gradient: "from-cyan-400 to-blue-400" },
      ]
    },
    {
      name: "Others",
      items: [
        { name: "REST APIs", icon: <SiPostman className="text-orange-400" />, level: 100, gradient: "from-orange-400 to-amber-500" },
        { icon: <SiSocketdotio className="text-white" />, name: "Socket.IO", level: 100, gradient: "from-gray-600 to-gray-800" },
        { name: "EJS", icon: <SiJavascript className="text-yellow-400" />, level: 100, gradient: "from-yellow-500 to-amber-500" },
        { name: "Multer", icon: <FaFileUpload className="text-blue-400" />, level: 100, gradient: "from-blue-500 to-indigo-500" },
        { name: "Auth", icon: <FaUserShield className="text-green-400" />, level: 100, gradient: "from-green-500 to-emerald-500" },
        { name: "Passport", icon: <FaPassport className="text-cyan-400" />, level: 100, gradient: "from-cyan-500 to-blue-500" },
        { name: "Material UI", icon: <FaPassport className="text-cyan-400" />, level: 55, gradient: "from-blue-500 to-indigo-500" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section
      id="skills"
      className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 
      dark:text-gray-300 bg-white text-gray-800 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-3 sm:mb-4">
              My <span className="dark:text-white text-gray-800">Skills</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-cyan-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              Here's a comprehensive overview of the technologies and tools I use to build modern web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-10"
          >
            {skillsCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex} 
                variants={itemVariants}
                className="space-y-4 sm:space-y-6"
              >
                {/* Category Title */}
                <h3 className="text-lg sm:text-xl font-bold text-cyan-500 dark:text-cyan-400 border-b border-cyan-500/30 pb-2">
                  {category.name}
                </h3>

                {/* Skills Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col gap-2 dark:bg-gray-800/50 bg-gray-50 px-3 py-4 sm:px-4 sm:py-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:hover:shadow-cyan-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      variants={itemVariants}
                    >
                      {/* Icon and Percentage */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xl sm:text-2xl">
                          {skill.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-cyan-500 dark:text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 truncate">
                        {skill.name}
                      </span>

                      {/* Progress Bar */}
                      <div className="mt-1 sm:mt-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                          <motion.div
                            className={`bg-gradient-to-r ${skill.gradient} h-full rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.1 * (catIndex + skillIndex),
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Continuously learning and expanding my skill set with modern technologies and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;