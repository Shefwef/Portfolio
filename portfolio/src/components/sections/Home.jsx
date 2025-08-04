import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animated rotating taglines for extra personality
const phrases = [
  "Full-stack Software Developer",
  "AI Enthusiast",
  "Cloud Solutions Builder",
];

export const Home = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(
      () => setPhraseIdx((i) => (i + 1) % phrases.length),
      2200
    );
    return () => clearTimeout(timeout);
  }, [phraseIdx]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          {/* Modern animated gradient headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-500 to-lime-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Hi! I’m Shefayat
          </motion.h1>
          {/* Animated rotating taglines */}
          <span className="block h-[32px] md:h-[38px] font-semibold text-emerald-400 text-xl md:text-2xl mb-3 transition-colors duration-300">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          {/* Short, modern summary */}
          <motion.p
            className="text-gray-400 text-base md:text-lg mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I create scalable apps with clean code and a focus on user
            experience. I enjoy turning ideas into impactful products and love
            to collaborate.
          </motion.p>
          {/* Pop-on-hover buttons */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-200"
              whileHover={{ scale: 1.09, boxShadow: "0 0 24px #10b98166" }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/Shefayats_CV.pdf"
              download
              className="border border-green-400 text-green-400 py-3 px-8 rounded-full font-semibold hover:bg-green-600/10 hover:border-emerald-500 focus:ring-2 focus:ring-green-300 transition-all duration-200"
              whileHover={{ scale: 1.09, boxShadow: "0 0 18px #34d39955" }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </RevealOnScroll>
      {/* Soft animated background light for depth */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[350px] rounded-full bg-gradient-to-tr from-emerald-400/20 via-cyan-300/20 to-transparent blur-3xl opacity-80 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.1 }}
      />
    </section>
  );
};
