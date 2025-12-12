import React from "react";
import { hover, motion, stagger } from "framer-motion";
import { FaGithub, FaDatabase, FaEye } from "react-icons/fa";
import {
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiReact,
    SiEthers,
    SiSolidity,
} from "react-icons/si"

import studentIllustration from "../assets/student.png"
// import chatAppIllustration from "../assets/chat-app.png"
import libraryAppIllustration from "../assets/library-managment.png"
// import transaction from "../assets/transaction.gif"
// import netmovies from "../assets/logo.png"
import taskReaminderLogo from "../assets/task-remainder.png"
import ChatApp from "../assets/chatApp.png"
import Krypt from "../assets/krypt.png"
import HouseSellImage from "../assets/housesell.png"
import ShopShere from "../assets/shopshere.png"
import NetMovies from "../assets/netmovie.png"


import myPortfolio from "../assets/portfolio.png"

const Projects = () => {
    const projects = [
        { 
            title: "Real-Time Chat Application",
            tech: [
                { icon: <SiReact className="text-cyan-500"/>, name: "React", hover: "hover:bg-cyan-600 hover:translate-y-1 transition duration-200"},
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js", hover: "hover:bg-green-600 hover:translate-y-1 transition duration-300"},
                { icon: <FaDatabase className="text-yellow-500" />, name: "MySQL", hover: "hover:bg-yellow-600 hover:translate-y-1 transition duration-300"},
            ],
            description: 
            "A socket.io based chat application with real-tie messaging, user authentication and message history.",
            illustration: ChatApp,
            code: "https://github.com/niyomugaboetiene/Chat-app-frontend",
            demo: "#"
        },
        { 
            title: "Krypto-site-3.0 App",
            tech: [
                { icon: <SiReact className="text-cyan-500" />, name: "React", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                { icon: < SiEthers className="text-green-500" />, name: "ethers", hover: "hover:bg-green-600 hover:translate-y-1 transition duration-200" },
                { icon: < SiTypescript className="text-blue-500" />, name: "Typescript", hover: "hover:bg-blue-600 hover:translate-y-1 transition duration-200" },
                { icon: <SiSolidity className="text-blue-500" />, name: "soldity", hover: "hover:bg-blue-600 hover:translate-y-1 transition duration-200"},
            ],
            description: 
            "Simple modern decentralized app which enable sending token across the world",
            illustration: Krypt,
            code: "https://github.com/niyomugaboetiene/krypto-site.3.0",
            demo: "https://krypto-site-3-0.vercel.app"
        },
        {
            title: "Student Managment System",
            tech: [
                {icon: <SiPhp className="text-purple-500"/>, name: "PHP", hover:"hover:bg-purple-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiTailwindcss className="text-blue-400"/>, name: "Tailwindcss", hover:"hover:bg-blue-600 hover:translate-y-1 transition duration-200" },
                {icon: <FaDatabase className="text-yellow-600"/>, name: "MySQL", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
            ],
            description:
            "Student Management System with Student managment, user authentication, and Role based access control.",
            illustration: studentIllustration,
            code: "https://github.com/niyomugaboetiene/Gikonko-Tss-Managment-system",
            demo: "#"
        },

        {
            title: "Portfolio Website",
            tech: [
                { icon: <SiReact className="text-cyan-400" />, name: "React.js", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript", hover:"hover:bg-blue-600 hover:translate-y-1 transition duration-200" },
            ],
            description: 
              "A responsive portfolio website showcasting project, skills and contact information with smooth animations.",
              illustration: myPortfolio,
              code: "https://github.com/niyomugaboetiene/my-react-portfolio",
              demo: "#",
        },
        {
            title: "Library Management System",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600 transition hover:translate-y-1 duration-200" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDb", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
            ],
            description:
            "Full-stack Library management application with mananging student functionality and Role based access control",
            illustration: libraryAppIllustration,
            code: "https://github.com/niyomugaboetiene/Library-Management-System",
            demo: "#"
        },
        {
            title: "Netmoviess",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600 transition hover:translate-y-1 duration-300" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-300" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-300" },
                {icon: <SiTailwindcss className="text-yellow-500"/>, name: "IMDB API", hover:"hover:bg-yellow-600 hover:translate-y-1 transition duration-300" },
            ],
            description:
            "A modern Web app which allows you to watch full movie online ",
            illustration: NetMovies,
            code: "https://github.com/niyomugaboetiene/movie-app.dev",
            demo: "https://netmoviess.vercel.app"
        },  
         {
            title: "Task remainder",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
            ],
            description:
            "A modern mobile app where you can set your remainders for daily activities",
            illustration: taskReaminderLogo,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
        {
            title: "Shop Shere",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDB", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
            ],
            description:
            "A modern Ecommerce-app where you can buy and sell goods with admin portal to manipulate goods and customers to view and buy goods",
            illustration: ShopShere,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
        {
            title: "Home Finder",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600 hover:translate-y-1 transition duration-200" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDB", hover:"hover:bg-green-600 hover:translate-y-1 transition duration-200" },
            ],
            description:
            "A modern Ecommerce-ap for buying, renting and selling houses with three users such as Admin with full privileges, seller(landrold) and customer",
            illustration: HouseSellImage,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
    ];

    const containerVariants = {
        // it start full invisible
        hidden: { opacity: 0 },
        visible: {
            // 
            opacity: 1,
            transition: {
                // means animation will start one after another
                staggerChildren: 0.1,
                // start after 0.3 
                delayChildren: 0.3
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
        name="projects"
          className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-300 flex items-center justify-center bg-white px-4 md:px-16 py-20"
        >
            <div className="max-w-6xl">
                <motion.div
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
                >
                    <motion.h2 
                       className="text-4xl font-bold text-cyan-500 mb-8 text-center"
                       variants={itemVariants}
                    >
                        My <span className="text-white">Projects </span>
                    </motion.h2>

                    <motion.p
                      className="text-lg leading-relaxed mb-12 text-center mx-w-2xl mx-auto"
                      variants={itemVariants}
                    >
                        Here are some of my projects available on GitHub. Each demonstrates different aspects of my full-stack develpment skills.
                      </motion.p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full "
                      >
                        {projects.map((projects, index) => (
                            <motion.div
                              key={index}
                              className="bg-grray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl mb-3 hover:shadow-cyan-500/20 transition-all duration-300   hover:border-cyan-500 hover:border-2"
                              variants={itemVariants}
                              whileHover={{ y: -5 }}
                              >
                                <div className="relative  overflow-hidden flex items-center">
                                    <img src={projects.illustration} alt={projects.title} 
                                    className="w-full h-80 object-contain"/>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {projects.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects.tech.map((tech, i) => (
                                            <span 
                                            key={i}
                                            className={`flex items-center gap-1 ${tech.hover} bg-gray-100/20 px-4 py-1 rounded-full text-sm`}
                                            >
                                                {tech.icon}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-cyan-500 mb-6">{projects.description}</p>

                                    <div className="flex gay-4 justify-between">
                                        <a href={projects.code}
                                           rel="noopener noreferrer"
                                           className="flex items-center gap-2 px-2 py-2 border border-gray-600 hover:bg-gray-700/50
                                           rounded-lg text-cyan-500 hover:scale-105 transition duration-200"
                                        >
                                            <FaGithub/>
                                            View Code
                                        </a>    
                                        <a href={projects.demo}
                                           rel="noopener noreferrer"
                                           className="flex items-center gap-2 px-2 py-2 border border-gray-600 hover:bg-gray-700/50
                                           rounded-lg transition duration-200 hover:scale-105 text-cyan-500"
                                        >
                                            <FaEye />
                                            Explore
                                        </a>
                                    </div>
                                </div>
                              </motion.div>
                        ))}
                      </div>
                </motion.div>
               <hr  className="border-2 text-gray-500 dark:border-none"/>
            </div>
           </section>
    )
}

export default Projects