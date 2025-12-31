import React from "react";
import { motion } from "framer-motion";
const About = () => {


  return (
    <section 
      name="about"
      className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-300 flex items-center bg-white justify-center px-4 md:px-16 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* normal div but enhanced with animations */}
        <motion.div
          className="flex-1"
          // initial opacity: it start invisible and shifted to 40px to the left
          initial={{ opacity: 0, x: -40 }}
          // when it scrool int view it become full visible and move to normal postition
          whileInView={{ opacity: 1, x: 0 }}
          // animation run onve
          viewport={{ once: true }}
          // animation take 0.8s to finish
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-cyan-500 mb-[90px] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-4">
                            About <span className="dark:text-white text-gray-800">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // delay wait 0.4 before starting the animation
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg text-gray-500 dark:text-white leading-relaxed">
              I'm <span className="font-semibold text-cyan-400">Etiene Niyomugabo</span>, a passionate <span className="text-cyan-400 font-bold"> Blockchain Developer, </span> 
              <span className="font-bold text-cyan-400">Smart contract Developer, </span> <span className="font-bold text-cyan-400">Machine Learning and Deep learning Developer,</span>  <span className="text-cyan-500 font-bold">full stack developer</span> with a strong desire to build clean, user-friendly, and impactful digital experiences. What began as curiosity has envolved into a dedicated career path.
            </p>

            <p className="text-lg leading-relaxed dark:text-white text-gray-500">
              My expertise spans both frontend and backend technologies, allowing me to create seamless, full-featured applications from concept to deployment.
            </p>

            <ul className="space-y-3 text-lg">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span className="text-gray-500 dark:text-white">Building responsive, accessible web applications</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span className="text-gray-500 dark:text-white">Continuously learning modern technologies</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span className="text-gray-500 dark:text-white">Based in Rwanda, open to remote opportunities</span>
              </motion.li>
            </ul>
            <div className="">
                <h2 className="text-3xl text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-4">
                            My <span className="dark:text-white text-gray-800">Hobbies</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div></h2>

                {/* Responsive hobby cards: stack on small screens, two columns on sm+ */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 w-full mt-9">
                  <div className="space-y-3 dark:bg-gray-800/50 w-full sm:w-[48%] p-5 border dark:border-cyan-500 rounded-lg hover:scale-x-105 transition duration-200 shadow-lg">
                    <div className="flex text-cyan-500 text-sm w-full">
                       <p>Reading books</p>
                       <p className="ml-auto">60%</p>
                  </div>
                  <div className="bg-gray-500 rounded-full overflow-hidden h-3">
                      <motion.div
                        className="bg-gradient-to-l from-cyan-500 to-purple-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1 }}
                      />
                        
                  </div>
                </div>

                <div className="space-y-3 dark:bg-gray-800/50 w-full sm:w-[48%] p-5 border dark:border-cyan-500 rounded-lg hover:scale-105 transition duration-200 shadow-lg">
                  <div className="flex text-cyan-500 text-sm w-full">
                      <p>Watching movies & cartoons</p>
                      <p className="ml-auto">90%</p>
                  </div>
                  <div className="bg-gray-500 rounded-full overflow-hidden h-3">
                    <motion.div
                    className="bg-gradient-to-l from-amber-500 to-cyan-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1}}
                        /> 
                       
                  </div>
               </div>

                <div className="space-y-3 dark:bg-gray-800/50 w-full sm:w-[48%] p-5 border dark:border-cyan-500 rounded-lg mt-9 hover:scale-105 transition duration-200 shadow-lg">
                   <div className="flex text-cyan-500 text-sm w-full">
                       <p>Listening musics</p>
                       <p className="ml-auto">70%</p>
                   </div>
                   <div className="bg-gray-500 rounded-full overflow-hidden h-3">
                    <motion.div
                       className="bg-gradient-to-l from-lime-500 to-cyan-500 h-3 rounded-full"
                       initial={{ width: 0 }}
                       animate={{ width: "70%" }}
                       transition={{ duration: 1 }}
                    />
                   </div>
                </div>

                <div className="space-y-3 dark:bg-gray-800/50 w-full sm:w-[48%] p-6  border dark:border-cyan-500 rounded-lg mt-9 hover:scale-105 transition duration-200 shadow-lg">
                  <div className="flex text-cyan-500 text-sm w-full">
                      <p>Watching documentaries</p>
                      <p className="ml-auto">60%</p>
                  </div>
                  <div className="bg-gray-500 rounded-full overflow-hidden h-3">
                    <motion.div 
                      className="bg-gradient-to-l from-emerald-500 to-blue-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1 }}
>
  <a href="#projects">
    <button className="mt-8 px-8 py-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg text-lg font-medium shadow-lg dark:hover:shadow-cyan-500/20 transition-all bg-gray-500 duration-300 hover:scale-105">
      View My Projects
                   </button>
                </a>
              </motion.div>
          </motion.div>
          <hr  className="relative -bottom-24 border-2 text-gray-500 dark:border-none"/>
          <hr  className="relative -bottom-[2400px] border-2 text-gray-500 dark:border-none"/>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;