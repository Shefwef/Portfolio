import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const projects = [
  {
    name: "Campus Buy",
    description:
      "MERN stack student marketplace featuring AI integration for smarter buying/selling and Chatbase API-driven chat.",
    tech: ["React", "Node.js", "MongoDB", "Chatbase", "Render"],
    link: "https://github.com/Shefwef/Campus-Buy",
  },
  {
    name: "KrishokBondhu",
    description:
      "AI & ML-powered agriculture platform for crop recommendations, fertilizer suggestions, and plant disease detection.",
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
    link: "https://github.com/Shefwef/KrishokBondhu",
  },
  {
    name: "BlockFunder",
    description:
      "MERN & Solidity-based platform for blockchain crowdfunding, with Figma design, chatbot, and BotPress integration.",
    tech: ["Node.js", "JavaScript", "Blockchain", "Solidity", "BotPress"],
    link: "https://github.com/Shefwef/BlockFunder",
  },
  {
    name: "Talkster",
    description:
      "Real-time MERN chat app with Socket.io and JWT authentication.",
    tech: ["Socket.IO", "JWT", "Express", "React", "Node.js", "MongoDB"],
    link: "https://github.com/Shefwef/Talkster",
  },
];

export const Projects = () => (
  <section
    id="projects"
    className="min-h-screen flex items-center justify-center py-20 bg-transparent"
  >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-10 bg-green-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`
                rounded-xl p-6 bg-black min-h-[245px]
                shadow transition-all duration-200
                hover:shadow-[0_0_24px_2px_#22c55e55] hover:scale-105
                focus-within:shadow-[0_0_24px_2px_#22c55e55] focus-within:scale-105
              `}
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-5 text-center tracking-wide">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-6 text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 w-full mb-4 mt-2">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="text-emerald-300 bg-emerald-800/10 py-1 px-3 rounded-full text-sm font-medium border border-emerald-900/20 transition hover:scale-105 hover:bg-emerald-500/20 hover:text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-emerald-300 font-semibold transition-colors text-base"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
