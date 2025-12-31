import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      name="about"
      className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 bg-white dark:text-gray-300 text-gray-800 flex items-center justify-center px-4 md:px-16 py-10 md:py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500 mb-3 md:mb-4 text-center md:text-left">
              About <span className="dark:text-white text-gray-800">Me</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-cyan-500 mb-6 md:mb-8 mx-auto md:mx-0"></div>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-cyan-500 dark:text-cyan-400">Etiene Niyomugabo</span>, a passionate{" "}
              <span className="font-bold text-cyan-500 dark:text-cyan-400">Blockchain Developer</span>,{" "}
              <span className="font-bold text-cyan-500 dark:text-cyan-400">Smart Contract Developer</span>,{" "}
              <span className="font-bold text-cyan-500 dark:text-cyan-400">Machine Learning and Deep Learning Developer</span>,{" "}
              <span className="font-bold text-cyan-500 dark:text-cyan-400">Full Stack Developer</span> with a strong desire to build clean, user-friendly, and impactful digital experiences.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              My expertise spans both frontend and backend technologies, allowing me to create seamless, full-featured applications from concept to deployment.
            </p>

            <ul className="space-y-2 md:space-y-3 text-base md:text-lg">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-cyan-500 dark:text-cyan-400 mr-2 mt-1">▹</span>
                <span className="text-gray-600 dark:text-gray-300">Building responsive, accessible web applications</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-cyan-500 dark:text-cyan-400 mr-2 mt-1">▹</span>
                <span className="text-gray-600 dark:text-gray-300">Continuously learning modern technologies</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-cyan-500 dark:text-cyan-400 mr-2 mt-1">▹</span>
                <span className="text-gray-600 dark:text-gray-300">Based in Rwanda, open to remote opportunities</span>
              </motion.li>
            </ul>

            <div className="mt-8 md:mt-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-4 md:mb-6 text-center">
                My <span className="dark:text-white text-gray-800">Hobbies</span>
              </h2>
              <div className="w-20 md:w-24 h-1 bg-cyan-500 mx-auto mb-6 md:mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  className="dark:bg-gray-800/50 bg-gray-50 p-4 md:p-5 border border-gray-200 dark:border-cyan-500/30 rounded-lg hover:scale-[1.02] transition duration-200 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex justify-between text-cyan-500 dark:text-cyan-400 text-sm md:text-base mb-2">
                    <p>Reading books</p>
                    <p>60%</p>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden h-2 md:h-3">
                    <motion.div
                      className="bg-gradient-to-l from-cyan-500 to-purple-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="dark:bg-gray-800/50 bg-gray-50 p-4 md:p-5 border border-gray-200 dark:border-cyan-500/30 rounded-lg hover:scale-[1.02] transition duration-200 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex justify-between text-cyan-500 dark:text-cyan-400 text-sm md:text-base mb-2">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">Watching movies & cartoons</p>
                    <p>90%</p>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden h-2 md:h-3">
                    <motion.div
                      className="bg-gradient-to-l from-amber-500 to-cyan-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="dark:bg-gray-800/50 bg-gray-50 p-4 md:p-5 border border-gray-200 dark:border-cyan-500/30 rounded-lg hover:scale-[1.02] transition duration-200 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="flex justify-between text-cyan-500 dark:text-cyan-400 text-sm md:text-base mb-2">
                    <p>Listening music</p>
                    <p>70%</p>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden h-2 md:h-3">
                    <motion.div
                      className="bg-gradient-to-l from-lime-500 to-cyan-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="dark:bg-gray-800/50 bg-gray-50 p-4 md:p-5 border border-gray-200 dark:border-cyan-500/30 rounded-lg hover:scale-[1.02] transition duration-200 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex justify-between text-cyan-500 dark:text-cyan-400 text-sm md:text-base mb-2">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">Watching documentaries</p>
                    <p>60%</p>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden h-2 md:h-3">
                    <motion.div
                      className="bg-gradient-to-l from-emerald-500 to-blue-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 1.3 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-8 md:mt-10 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <a href="#projects">
                <button className="px-6 md:px-8 py-3 bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg text-base md:text-lg font-medium shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  View My Projects
                </button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;