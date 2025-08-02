import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent leading-right">
            Hi! I'm Shefayat
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
           A senior year undergrad and a full-stack software developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34, 197, 94, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="/Shefayats_CV.pdf"
              download
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34, 197, 94, 0.2)] hover:bg-green-500/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
