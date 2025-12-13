import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

import studentIllustration from "../assets/student.png";
import libraryAppIllustration from "../assets/library-managment.png";
import taskReaminderLogo from "../assets/task-remainder.png";
import ChatApp from "../assets/chatApp.png";
import Krypt from "../assets/krypt.png";
import HouseSellImage from "../assets/housesell.png";
import ShopShere from "../assets/shopshere.png";
import NetMovies from "../assets/netmovie.png";
import myPortfolio from "../assets/portfolio.png";

const Projects = () => {
    const [isHovered, setIsHovered] = useState(null);
    const projects = [
        { 
            title: "Real-Time Chat Application",
            tech: [
                { icon: <SiReact className="text-cyan-500"/>, name: "React", hover: "hover:bg-cyan-600" },
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js", hover: "hover:bg-green-600" },
                { icon: <FaDatabase className="text-yellow-500" />, name: "MySQL", hover: "hover:bg-yellow-600" },
            ],
            description: "A socket.io based chat application with real-time messaging, user authentication and message history.",
            illustration: ChatApp,
            code: "https://github.com/niyomugaboetiene/Chat-app-frontend",
            demo: "#"
        },
        { 
            title: "Krypto-site-3.0 App",
            tech: [
                { icon: <SiReact className="text-cyan-500" />, name: "React", hover:"hover:bg-cyan-600" },
                { icon: <SiEthers className="text-green-500" />, name: "ethers", hover: "hover:bg-green-600" },
                { icon: <SiTypescript className="text-blue-500" />, name: "Typescript", hover: "hover:bg-blue-600" },
                { icon: <SiSolidity className="text-blue-500" />, name: "solidity", hover: "hover:bg-blue-600"},
            ],
            description: "Simple modern decentralized app which enables sending tokens across the world",
            illustration: Krypt,
            code: "https://github.com/niyomugaboetiene/krypto-site.3.0",
            demo: "https://krypto-site-3-0.vercel.app"
        },
        {
            title: "Student Management System",
            tech: [
                {icon: <SiPhp className="text-purple-500"/>, name: "PHP", hover:"hover:bg-purple-600" },
                {icon: <SiTailwindcss className="text-blue-400"/>, name: "Tailwindcss", hover:"hover:bg-blue-600" },
                {icon: <FaDatabase className="text-yellow-600"/>, name: "MySQL", hover:"hover:bg-green-600" },
            ],
            description: "Student Management System with student management, user authentication, and role-based access control.",
            illustration: studentIllustration,
            code: "https://github.com/niyomugaboetiene/Gikonko-Tss-Managment-system",
            demo: "#"
        },
        {
            title: "Portfolio Website",
            tech: [
                { icon: <SiReact className="text-cyan-400" />, name: "React.js", hover:"hover:bg-cyan-600" },
                { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind", hover:"hover:bg-cyan-600" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript", hover:"hover:bg-blue-600" },
            ],
            description: "A responsive portfolio website showcasing projects, skills and contact information with smooth animations.",
            illustration: myPortfolio,
            code: "https://github.com/niyomugaboetiene/my-react-portfolio",
            demo: "#",
        },
        {
            title: "Library Management System",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDB", hover:"hover:bg-green-600" },
            ],
            description: "Full-stack Library management application with managing student functionality and role-based access control",
            illustration: libraryAppIllustration,
            code: "https://github.com/niyomugaboetiene/Library-Management-System",
            demo: "#"
        },
        {
            title: "Netmoviess",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600" },
                {icon: <SiTailwindcss className="text-yellow-500"/>, name: "IMDB API", hover:"hover:bg-yellow-600" },
            ],
            description: "A modern web app which allows you to watch full movies online",
            illustration: NetMovies,
            code: "https://github.com/niyomugaboetiene/movie-app.dev",
            demo: "https://netmoviess.vercel.app"
        },
        {
            title: "Task Reminder",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600" },
            ],
            description: "A modern mobile app where you can set your reminders for daily activities",
            illustration: taskReaminderLogo,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
        {
            title: "Shop Shere",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDB", hover:"hover:bg-green-600" },
            ],
            description: "A modern E-commerce app where you can buy and sell goods with admin portal to manage goods and customers to view and buy goods",
            illustration: ShopShere,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
        {
            title: "Home Finder",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React", hover:"hover:bg-cyan-600" },
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js", hover:"hover:bg-green-600" },
                {icon: <SiTailwindcss className="text-cyan-500"/>, name: "Tailwindcss", hover:"hover:bg-cyan-600" },
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDB", hover:"hover:bg-green-600" },
            ],
            description: "A modern E-commerce app for buying, renting and selling houses with three user types: Admin with full privileges, Seller (Landlord) and Customer",
            illustration: HouseSellImage,
            code: "https://github.com/niyomugaboetiene/task-remainder-mobile-app",
            demo: "#"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
            className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-300 bg-white text-gray-800 flex items-center justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20"
        >
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-4">
                            My <span className="dark:text-white text-gray-800">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
                            Here are some of my projects available on GitHub. Each demonstrates different aspects of my full-stack development skills.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full auto-rows-fr h-[1500px]">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 hover:shadow-cyan-500/20 flex flex-col h-full"
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                            >
                                <div 
                                  className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" 
                                >
                                    <img 
                                        src={project.illustration} 
                                        alt={project.title} 
                                        
                                        className="w-full h-full object-cover p-4 transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span 
                                                    key={i}
                                                    className={`flex items-center gap-1 ${tech.hover} bg-gray-100 dark:bg-gray-700/50 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 group-hover:translate-y-[-2px]`}
                                                >
                                                    <span className="text-lg">{tech.icon}</span>
                                                    <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                              
                                  <div className="flex space-x-12 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    {isHovered === index && (
                                        <a 
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute left-4 top-4  items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 dark:bg-gray-300  hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-500 rounded-full transition-all duration-200 group/btn"
                                        >
                                            <FaGithub className="group-hover/btn:scale-110 transition-transform duration-200" />
                                        </a> 
                                    
                                    
                                    )}
                                    {isHovered === index && project.demo !== "#" && (
                                            <a 
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute top-4 items-center justify-center gap-2 px-4 py-2.5 bg-cyan-100 hover:bg-cyan-200 text-cyan-500 rounded-full transition-all duration-200 hover:scale-105 group/btn"
                                            >
                                                <FaEye className="group-hover/btn:scale-110 transition-transform duration-200" />
                                            </a>
                                        )}  
                                     </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        variants={itemVariants}
                        className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
                    >
                        <p className="text-gray-600 dark:text-gray-400">
                            More projects and ongoing work available on{" "}
                            <a 
                                href="https://github.com/niyomugaboetiene" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-500 hover:text-cyan-600 font-semibold underline underline-offset-2 transition-colors duration-200"
                            >
                                GitHub
                            </a>
                        </p>
                    </motion.div>
                  <hr  className="relative -bottom-20 border-2 dark:border-none"/>
                </motion.div>
            </div>
            
        </section>
    );
};

export default Projects; 