import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

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
      3000 // slower rotation for better readability
    );
    return () => clearTimeout(timeout);
  }, [phraseIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-[#0a0f0a] to-black"
    >
      {/* Subtle animated gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-green-900/10 animate-pulse"></div>

      <RevealOnScroll>
        <motion.div
          className="text-center z-10 px-4 max-w-2xl mx-auto pb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Hi! I’m Shefayat
          </motion.h1>

          {/* Rotating phrases */}
          <span className="block h-[34px] md:h-[40px] font-semibold text-emerald-400 text-xl md:text-2xl mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6 }}
              >
                {phrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
          </span>

          {/* Intro text */}
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I create scalable apps with clean code and a focus on user
            experience. I enjoy turning ideas into impactful products and love
            to collaborate.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-10">
            <SocialIcon
              href="https://facebook.com/YOUR_FACEBOOK"
              label="Facebook"
              Icon={FaFacebookF}
            />
            <SocialIcon
              href="https://instagram.com/YOUR_INSTAGRAM"
              label="Instagram"
              Icon={FaInstagram}
            />
            <SocialIcon
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              label="LinkedIn"
              Icon={FaLinkedinIn}
            />
            <SocialIcon
              href="https://github.com/Shefwef"
              label="GitHub"
              Icon={FaGithub}
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/Shefayats_CV.pdf"
              download
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #10b98199" }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block border border-emerald-400 text-emerald-300 py-3 px-8 rounded-full font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </RevealOnScroll>

      {/* Scroll down indicator
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-emerald-400 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-sm">
          <span>Scroll</span>
          <div className="w-[1px] h-6 bg-emerald-400 mt-1"></div>
        </a>
      </motion.div> */}
    </section>
  );
};

// Social icon with glow + scale effect
const SocialIcon = ({ href, label, Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-emerald-400 text-emerald-300 bg-transparent hover:bg-emerald-400 hover:text-black transition-colors focus:outline-none"
    aria-label={label}
    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #10b981aa" }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
  </motion.a>
);
