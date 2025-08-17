import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaArrowDown,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const phrases = [
  "Full-stack Software Developer",
  "AI Enthusiast", 
  "Cloud Solutions Builder",
  "Problem Solver",
  "Tech Innovator",
];

const particleVariants = {
  animate: {
    y: [-20, -100, -20],
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export const Home = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setPhraseIdx((i) => (i + 1) % phrases.length),
      3000 // slower rotation for better readability
    );
    return () => clearTimeout(timeout);
  }, [phraseIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-[#0a0f0a] to-black"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 3,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Subtle animated gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-green-900/10 animate-gradient"></div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-emerald-500/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-green-600/10 rounded-lg"
        animate={{
          rotate: -360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <RevealOnScroll>
        <motion.div
          className="text-center z-10 px-4 max-w-2xl mx-auto pb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div className="relative mb-6">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4 text-gradient relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              Hi! I'm{" "}
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(16, 185, 129, 0.8)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Shefayat
              </motion.span>
            </motion.h1>
            
            {/* Decorative line */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Rotating phrases with typing effect */}
          <div className="h-[34px] md:h-[40px] font-semibold text-emerald-400 text-xl md:text-2xl mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="inline-block"
              >
                {phrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              className="ml-1 text-emerald-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |  
            </motion.span>
          </div>

          {/* Intro text */}
          <motion.p 
            className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I create{" "}
            <motion.span 
              className="text-emerald-400 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              scalable applications
            </motion.span>
            {" "}with clean code and a focus on exceptional user experiences. 
            I enjoy turning innovative ideas into impactful products and thrive in collaborative environments.
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex justify-center gap-4 mb-10 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <SocialIcon
              href="https://github.com/Shefwef"
              label="GitHub"
              Icon={FaGithub}
              color="#333"
            />
            <SocialIcon
              href="https://leetcode.com/u/Shefwef/"
              label="LeetCode"
              Icon={SiLeetcode}
              color="#FFA116"
            />
            <SocialIcon
              href="https://codeforces.com/profile/Shefayat101"
              label="Codeforces"
              Icon={SiCodeforces}
              color="#1F8ACB"
            />
            <SocialIcon
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              label="LinkedIn"
              Icon={FaLinkedinIn}
              color="#0077B5"
            />
            <SocialIcon
              href="https://facebook.com/YOUR_FACEBOOK"
              label="Facebook"
              Icon={FaFacebookF}
              color="#1877F2"
            />
            <SocialIcon
              href="https://instagram.com/YOUR_INSTAGRAM"
              label="Instagram"
              Icon={FaInstagram}
              color="#E4405F"
            />
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="/Shefayats_CV.pdf"
              download
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 px-8 rounded-full font-semibold shadow-xl overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <FaDownload className="relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center gap-3 border-2 border-emerald-400 text-emerald-300 py-4 px-8 rounded-full font-semibold glass-effect overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#10b981",
                color: "#000",
                backgroundColor: "rgba(16, 185, 129, 0.9)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </RevealOnScroll>

      {/* Enhanced scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-sm hover:text-emerald-300 transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="mb-2 font-medium">Discover More</span>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown className="mb-1" />
            <motion.div 
              className="w-[2px] h-8 bg-gradient-to-b from-emerald-400 to-transparent rounded-full"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

// Enhanced social icon with advanced animations
const SocialIcon = ({ href, label, Icon, color = "#10b981" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-full glass-effect text-emerald-300 overflow-hidden"
    aria-label={label}
    whileHover={{ 
      scale: 1.2, 
      boxShadow: `0 0 25px ${color}40`,
      backgroundColor: `${color}15`
    }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2 }}
  >
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ backgroundColor: color }}
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="relative z-10 transition-colors duration-300"
      style={{ color: 'inherit' }}
      whileHover={{ 
        rotate: 360,
        color: label === 'GitHub' ? '#fff' : '#000'
      }}
      transition={{ duration: 0.6 }}
    >
      <Icon size={20} />
    </motion.div>
    
    {/* Tooltip */}
    <motion.div
      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-xl border border-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none z-20"
      initial={{ y: 10, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {label}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
    </motion.div>
  </motion.a>
);
