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
        <h2 className="text-4xl font-extrabold mb-14 bg-green-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`
                flex flex-col justify-between h-full rounded-2xl p-7 bg-black
                shadow-md transition-all duration-200
                hover:scale-[1.025] hover:shadow-[0_0_20px_0_#22c55e33]
                border border-[#232a22] 
              `}
              tabIndex={0}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-left">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-7 text-left leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 w-full mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-900/40 text-green-300 py-1.5 px-3 rounded-full text-xs font-semibold border border-emerald-800/40 transition-colors duration-100 hover:bg-emerald-700/40 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Footer link */}
              <div className="flex justify-end mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors text-base underline underline-offset-4"
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
