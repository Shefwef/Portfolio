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
      2100
    );
    return () => clearTimeout(timeout);
  }, [phraseIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <motion.div
          className="text-center z-10 px-4 max-w-2xl mx-auto pb-8"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Hi! I’m Shefayat
          </motion.h1>
          <span className="block h-[34px] md:h-[40px] font-semibold text-emerald-400 text-xl md:text-2xl mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            I create scalable apps with clean code and a focus on user
            experience. I enjoy turning ideas into impactful products and love
            to collaborate.
          </p>
          {/* Social Icons Row */}
          <div className="flex justify-center gap-6 mb-8">
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
          {/* Download CV */}
          <motion.a
            href="/Shefayats_CV.pdf"
            download
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
            whileHover={{
              scale: 1.048,
              boxShadow: "0 0 16px #10b98199",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};

// Minimal, pro icon button
const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-emerald-400 text-emerald-300 bg-transparent hover:bg-emerald-400 hover:text-black transition-colors focus:outline-none"
    aria-label={label}
    tabIndex={0}
    style={{ boxShadow: "none" }}
  >
    <Icon size={20} />
  </a>
);
