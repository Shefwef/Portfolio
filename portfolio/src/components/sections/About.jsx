import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  {
    title: "Languages",
    items: [
      "C",
      "C++",
      "C#",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Solidity",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Next.js",
      "Express.js",
      "FastAPI",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "Docker",
      "AWS",
      "Azure",
      "Postman",
      "SwaggerUI",
    ],
  },
  {
    title: "Design & Dev Tools",
    items: ["Figma", "Canva", "Adobe Photoshop", "WordPress", "BotPress"],
  },
];

export const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-[#0a0f0a] to-black"
  >
    <RevealOnScroll>
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h2
          className="text-4xl font-extrabold mb-14 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I’m a software engineering undergrad passionate about full-stack
          development, AI, and cloud solutions. I focus on clean, scalable code
          and building user-centric products. I love turning ideas into reality,
          exploring new tech, and collaborating in dynamic teams.
        </motion.p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="rounded-2xl p-7 bg-white/5 backdrop-blur-md shadow-lg border border-emerald-800/40 hover:shadow-emerald-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-bold text-green-400 mb-4">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, key) => (
                  <span
                    key={key}
                    className="flex items-center gap-1 bg-emerald-900/30 text-green-200 py-1 px-3 rounded-full text-xs font-medium border border-emerald-700/30 hover:bg-emerald-700/40 hover:text-white transition"
                  >
                    <FaCheckCircle size={10} /> {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Education",
              heading: "B.Sc in Software Engineering",
              sub: "Islamic University of Technology\n2022 – Present",
              list: [
                "CGPA: 3.46/4.00 (Till 5th Semester)",
                "Relevant: Data Structures, AI, Web Dev, Cloud Computing",
              ],
            },
            {
              title: "Work Experience",
              heading: "Software Developer @ RES Tech",
              sub: "2024 – Present",
              list: [
                "System design & frontend for ace-portfolio",
                "Landing page dev for Podcast Shorts (Rat@Studios)",
                "UI/UX and research on multiple projects",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl p-7 bg-white/5 backdrop-blur-md shadow-lg border border-emerald-800/40 hover:shadow-emerald-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-bold text-green-400 mb-4">
                {card.title}
              </h3>
              <div className="font-semibold text-white mb-1">
                {card.heading}
              </div>
              <div className="text-sm text-gray-400 mb-4 whitespace-pre-line">
                {card.sub}
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-100 text-sm md:text-base pl-3">
                {card.list.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
