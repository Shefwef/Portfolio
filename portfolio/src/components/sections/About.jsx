import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaCloud, 
  FaPalette, 
  FaTools,
  FaCertificate,
  FaTrophy,
  FaAward,
  FaMedal,
  FaStar,
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaWordpress,
  FaDatabase,
  FaServer,
  FaCogs,
  FaPaintBrush,
  FaLaptopCode,
  FaMicrochip,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiWordpress
} from "react-icons/si";

const skills = [
  {
    title: "Languages",
    icon: FaCode,
    color: "from-blue-400 to-purple-500",
    items: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Java", icon: FaJava, color: "#ed8b00" },
      { name: "C++", icon: FaCode, color: "#00599c" },
      { name: "C#", icon: FaMicrochip, color: "#239120" },
      { name: "Solidity", icon: FaShieldAlt, color: "#363636" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: FaTools,
    color: "from-emerald-400 to-teal-500",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "React Native", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Express.js", icon: FaServer, color: "#000000" },
      { name: "FastAPI", icon: FaRocket, color: "#009688" },
      { name: "TensorFlow", icon: FaMicrochip, color: "#ff6f00" },
      { name: "Scikit-learn", icon: FaCogs, color: "#f7931e" },
      { name: "NumPy", icon: FaDatabase, color: "#013243" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    color: "from-orange-400 to-red-500",
    items: [
      { name: "AWS", icon: FaCloud, color: "#ff9900" },
      { name: "Azure", icon: FaCloud, color: "#0078d4" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: FaServer, color: "#46e3b7" },
      { name: "Postman", icon: FaRocket, color: "#ff6c37" },
      { name: "Swagger", icon: FaLaptopCode, color: "#85ea2d" },
    ],
  },
  {
    title: "Design & Dev Tools",
    icon: FaPalette,
    color: "from-pink-400 to-rose-500",
    items: [
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Photoshop", icon: FaPaintBrush, color: "#31a8ff" },
      { name: "Canva", icon: FaPalette, color: "#00c4cc" },
      { name: "WordPress", icon: SiWordpress, color: "#21759b" },
    ],
  },
];

const certificates = [
  {
    title: "Artificial Intelligence Essentials V2",
    issuer: "IBM via Coursera",
    date: "2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    skills: ["Artificial Intelligence (AI)", "Generative AI", "Natural Language Processing (NLP)"]
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University via Coursera",
    date: "2025",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    skills: ["Scikit-Learn", "NumPy", "Supervised Learning", "Unsupervised Learning", "Regression Analysis", "CART", "Statistical Modeling", "Predictive Modeling", "Jupyter"]
  },
  {
    title: "Introduction to Docker",
    issuer: "Google Cloud via Coursera",
    date: "2025",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
    skills: ["Containerization", "Google Cloud Platform (GCP)", "DevOps", "Docker"]
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft Learn",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    skills: ["Web Development", "Visual Studio Code", "GitHub Pages"]
  },
  {
    title: "Tech Trends for Advancing Bangladesh",
    issuer: "Grameenphone Academy",
    date: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    skills: ["Technology Trends", "Digital Innovation", "Bangladesh Tech Ecosystem"]
  }
];

const achievements = [
  {
    title: "UIU Blockchain Olympiad 2025 – Finalist",
    description: "Reached the finals in the prestigious blockchain competition at United International University",
    icon: FaTrophy,
    color: "from-yellow-400 to-orange-500",
    year: "2025"
  },
  {
    title: "CodeRush 3.0 Hackathon – Top 10",
    description: "Secured position in Top 10 and advanced to the Presentation Round",
    icon: FaMedal,
    color: "from-purple-400 to-pink-500",
    year: "2024"
  },
  {
    title: "CodeRush 2.0 Hackathon – 11th Place",
    description: "Achieved 11th place overall and 2nd among Freshman Teams",
    icon: FaAward,
    color: "from-green-400 to-blue-500",
    year: "2023"
  },
  {
    title: "MindSparks23 Business Case Competition – Finalist",
    description: "Reached the finals in the business case competition showcasing strategic thinking",
    icon: FaStar,
    color: "from-indigo-400 to-purple-500",
    year: "2023"
  },
  {
    title: "UIU English Olympiad – Top 30",
    description: "Secured position in Top 30 in the English language proficiency competition",
    icon: FaCertificate,
    color: "from-blue-400 to-cyan-500",
    year: "2021"
  }
];

export const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/5 via-transparent to-transparent"></div>
      
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a{" "}
                <motion.span 
                  className="text-emerald-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  software engineering undergraduate
                </motion.span>
                {" "}passionate about full-stack development, AI, and cloud solutions. 
                I focus on clean, scalable code and building user-centric products.
              </motion.p>
              <motion.p
                className="text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I love turning innovative ideas into reality, exploring cutting-edge technologies, 
                and collaborating with dynamic teams to create impactful solutions.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <div className="mb-20">
            <motion.h3
              className="text-3xl font-bold text-center mb-12 text-emerald-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technical Skills
            </motion.h3>
            
            {/* Skill Category Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.button
                    key={skill.title}
                    onClick={() => setActiveSkill(index)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeSkill === index
                        ? 'bg-emerald-500 text-black shadow-lg'
                        : 'glass-effect text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <IconComponent size={16} />
                    {skill.title}
                  </motion.button>
                );
              })}
            </div>

            {/* Active Skill Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-2xl p-8 max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills[activeSkill].items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotateY: 10,
                          z: 50
                        }}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm">
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{background: `linear-gradient(135deg, ${item.color}20, transparent)`}}></div>
                          
                          {/* Icon */}
                          <div className="flex flex-col items-center space-y-3">
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.8 }}
                            >
                              <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300" style={{backgroundColor: item.color}}></div>
                              <IconComponent 
                                size={48} 
                                className="relative z-10 transition-all duration-300"
                                style={{color: hoveredItem === item.name ? item.color : '#6b7280'}}
                              />
                            </motion.div>
                            
                            {/* Name */}
                            <motion.span 
                              className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.name}
                            </motion.span>
                          </div>
                          
                          {/* Floating tooltip */}
                          <AnimatePresence>
                            {hoveredItem === item.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: -10, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20"
                              >
                                <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-xl border border-gray-700">
                                  {item.name}
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Certificates Section */}
          <div className="mb-20">
            <motion.h3
              className="text-3xl font-bold text-center mb-12 text-emerald-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaCertificate className="inline mr-3" />
              Certifications & Courses
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {cert.date}
                    </div>
                  </div>
                  
                  {/* Certificate Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{cert.issuer}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-800/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <motion.h3
              className="text-3xl font-bold text-center mb-12 text-emerald-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaTrophy className="inline mr-3" />
              Achievements & Recognition
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="text-black" size={24} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {achievement.title}
                            </h4>
                            <span className="text-emerald-400 font-semibold text-sm">
                              {achievement.year}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education & Work */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Education",
                icon: FaGraduationCap,
                heading: "B.Sc in Software Engineering",
                sub: "Islamic University of Technology",
                period: "2022 – Present",
                list: [
                ],
                color: "from-blue-400 to-purple-500",
              },
              {
                title: "Work Experience",
                icon: FaBriefcase,
                heading: "Software Developer @ RES Tech",
                sub: "Remote Position",
                period: "2024 – Present",
                list: [
                  "System design & frontend development for ace-portfolio",
                  "Landing page development for Podcast Shorts (Rat@Studios)",
                  "UI/UX design and research on multiple client projects",
                  "Collaborated with cross-functional teams to deliver high-quality solutions",
                ],
                color: "from-emerald-400 to-teal-500",
              },
            ].map((card, i) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${card.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-black" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-400 mb-1">
                          {card.title}
                        </h3>
                        <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-white text-lg mb-2">
                        {card.heading}
                      </h4>
                      <div className="flex items-center justify-between text-gray-400 text-sm mb-1">
                        <span>{card.sub}</span>
                        <span className="font-medium text-emerald-400">{card.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {card.list.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 text-gray-200"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.2 + idx * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
