import React from "react";
import { motion } from "framer-motion";
import aboutAnimation from "../assets/about.gif"
const About = () => {


  return (
    <section 
      name="about"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 flex items-center justify-center px-4 md:px-16 py-20"
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
            About <span className="text-white">Me</span>
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // delay wait 0.4 before starting the animation
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-cyan-400">Etiene Niyomugabo</span>, a passionate <span className="text-cyan-400 font-bold"> Blockchain Developer, </span> 
              <span className="font-bold text-cyan-400">Smart contract Developer, </span> <span className="font-bold text-cyan-400">Machine Learning and Deep learning Developer,</span>  <span className="text-cyan-500 font-bold">full stack developer</span> with a strong desire to build clean, user-friendly, and impactful digital experiences. What began as curiosity has envolved into a dedicated career path.
            </p>

            <p className="text-lg leading-relaxed">
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
                <span>Building responsive, accessible web applications</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span>Continuously learning modern technologies</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span>Based in Rwanda, open to remote opportunities</span>
              </motion.li>
            </ul>
            <div className="">
                <h2 className="text-3xl text-center"><span className="text-cyan-500 font-bold" >My</span> <span className="font-bold">Hobbies</span></h2>
                <div className="space-y-3 border w-[350px] p-2 rounded-lg">
                  <div className="flex text-white text-sm">
                       <p>Reading books</p>
                       <p className="ms-[210px]">60%</p>
                  </div>
                  <div className="bg-gray-500 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-cyan-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1 }}
                      />
                        
                  </div>
                </div>
                  <p>Watching cartoons</p>
                  <p>Watching movies</p>
                  <p>Watching documentaries</p>
                  <p>Playing football (sometime)</p>
            </div>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1 }}
>
  <a href="#projects">
    <button className="mt-8 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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