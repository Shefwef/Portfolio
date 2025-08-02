import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Campus Buy</h3>
              <p className="text-gray-400 mb-4">
                MERN stack student marketplace featuring AI integration for smarter buying/selling and Chatbase API-driven chat.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Chatbase", "Render"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(34,197,94,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">KrishokBondhu</h3>
              <p className="text-gray-400 mb-4">
               AI & ML-powered agriculture platform for crop recommendations, fertilizer suggestions, and plant disease detection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "TypeScript", "FastAPI", "Python", "Clerk", "TensorFlow", "Scikit-learn", "Cloudinary"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(34,197,94,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">BlockFunder</h3>
              <p className="text-gray-400 mb-4">
                MERN & Solidity-based platform for blockchain crowdfunding, with Figma design, chatbot, and BotPress integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "JavaScript", "Blockchain", "Solidity", "BotPress"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(34,197,94,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Talkster</h3>
              <p className="text-gray-400 mb-4">
                Real-time MERN chat app with Socket.io and JWT authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "JWT", "Express", "React", "Node.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
