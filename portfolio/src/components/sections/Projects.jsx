import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Ghuroo",
    description:
      "A travel platform designed to offer curated tour experiences, authentic reviews, and seamless booking for travel enthusiasts.",
    longDescription: "Ghuroo is a comprehensive travel platform that connects travelers with authentic experiences. Features include user reviews, booking management, and curated tour recommendations.",
    tech: [
      "React JS",
      "JavaScript",
      "Node.js",
      "Express",
      "Supabase",
      "Firebase",
    ],
    link: "https://github.com/Shefwef/ghuroo.git",
    image: "/ghuroo-1.png",
    landingPageImage: "/ghuroo-2.png",
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    name: "KrishokBondhu",
    description:
      "AI & ML-powered agriculture platform for crop recommendations, fertilizer suggestions, and plant disease detection.",
    longDescription: "An intelligent agriculture platform leveraging machine learning for crop optimization, disease detection, and farming recommendations to help farmers make data-driven decisions.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Clerk",
      "TensorFlow",
      "Scikit-learn",
      "Cloudinary",
    ],
    link: "https://github.com/Shefwef/KrishokBondhu.git",
    image: "/krishokbondhu-1.png",
    landingPageImage: "/krishokbondhu.png", 
    category: "AI/ML & Frontend",
    status: "Completed"
  },
  {
    id: 3,
    name: "BlockFunder",
    description:
      "MERN & Solidity-based platform for blockchain crowdfunding, with Figma design, chatbot, and BotPress integration.",
    longDescription: "A decentralized crowdfunding platform built on blockchain technology, featuring smart contracts, secure transactions, and an integrated chatbot for user support.",
    tech: ["Node.js", "JavaScript", "Blockchain", "Solidity", "BotPress"],
    link: "https://github.com/Shefwef/KUET_IntelliJ.git",
    image: "/blockfunder-1.png",
    landingPageImage: "/blockfunder-2.png",
    category: "Blockchain & Frontend",
    status: "Completed"
  },
  {
    id: 4,
    name: "Talkster",
    description:
      "Real-time MERN chat app with Socket.io and JWT authentication.",
    longDescription: "A real-time messaging application with secure authentication, instant messaging, and modern chat features built with the MERN stack.",
    tech: ["Socket.IO", "JWT", "Express", "React", "Node.js", "MongoDB"],
    link: "https://github.com/Shefwef/Talkster_Chat-App.git",
    image: "/talkster-1.png",
    landingPageImage: "/talkster-2.png",
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 5,
    name: "Shocchokor",
    description:
      "Figma-designed blockchain-powered tax redistribution platform enabling transparent, citizen-controlled fund allocation for rural development.",
    longDescription:
      "Shocchokor is an award-winning application designed with Figma for the Blockchain Olympiad. Leveraging blockchain, CBDC, and smart contracts, it allows taxpayers and diaspora to allocate taxes directly to vetted rural projects, track progress in real time, and participate in decentralized governance through weighted voting. Core features include fund allocation, project milestone tracking, real-time transparency, E-money wallet integration, and civic rewards. The design focuses on user-friendly interfaces and visual clarity, supporting secure transactions and impactful engagement for socioeconomic development.",
    tech: ["Figma"],
    link: "",
    image: "/Shocchokor-1.png",
    landingPageImage: "/Shocchokor-2.png",
    category: "UI/UX",
    status: "Figma Design"
  },
];


export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'AI/ML', 'Blockchain'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
      
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
              A collection of projects showcasing my expertise in modern web technologies,
              AI/ML, and blockchain development.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap justify-center gap-2 p-2 rounded-full glass-effect">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    filter === category
                      ? 'bg-emerald-500 text-black shadow-lg'
                      : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div className="relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 h-full">
        {/* Project Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-500 text-black rounded-full">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isHovered ? 1 : 0.8 }}
              className="text-white text-center"
            >
              <FaEye className="mx-auto mb-2" size={24} />
              <p className="text-sm font-medium">View Landing Page</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              {project.name}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={16} />
              </motion.a>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-800/40"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-400">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Floating Landing Page Preview */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-4 -right-4 z-50 pointer-events-none"
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              x: 50, 
              y: 50,
              rotateY: -15,
              rotateX: 10
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0,
              rotateY: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.3, 
              x: 50, 
              y: 50,
              rotateY: -15,
              rotateX: 10
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              {/* Floating shadow */}
              <div className="absolute inset-0 bg-black/40 blur-xl transform translate-y-4 scale-105"></div>
              
              {/* Landing page preview */}
              <motion.div
                className="relative w-80 h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-emerald-500/30"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={project.landingPageImage}
                  alt={`${project.name} landing page`}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                
                {/* Floating badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-bold bg-emerald-500 text-black rounded-full shadow-lg">
                    Preview
                  </span>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-effect"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-2">{project.name}</h3>
              <span className="px-3 py-1 text-sm font-semibold bg-emerald-500 text-black rounded-full">
                {project.category}
              </span>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View Code
              </motion.a>
            </div>
          </div>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-800/40 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
