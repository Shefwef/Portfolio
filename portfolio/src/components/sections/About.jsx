import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

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
    className="min-h-screen flex items-center justify-center py-20 bg-transparent"
  >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-extrabold mb-14 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-14">
          I’m a software engineering undergrad passionate about full-stack
          development, AI, and cloud solutions. I focus on clean, scalable code
          and building user-centric products. I love turning ideas into reality,
          exploring new tech, and collaborating in dynamic teams.
        </p>

        {/* Skills Section, standardized card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`
                h-full flex flex-col justify-between rounded-2xl p-7 bg-black
                shadow-md border border-[#232a22] transition-all duration-200
                hover:scale-[1.025] hover:shadow-[0_0_20px_0_#16b98122]
              `}
              tabIndex={0}
            >
              <h3 className="text-lg font-bold text-green-400 mb-4 text-left">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2 w-full mb-2">
                {skill.items.map((item, key) => (
                  <span
                    key={key}
                    className="bg-emerald-900/40 text-green-200 py-1.5 px-3 rounded-full text-xs font-semibold border border-emerald-800/40 transition-colors duration-100 hover:bg-emerald-700/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Work Section, same card/spacing as projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Education Card */}
          <div
            className={`
              h-full flex flex-col justify-between rounded-2xl p-7 bg-black
              shadow-md border border-[#232a22] transition-all duration-200
              hover:scale-[1.025] hover:shadow-[0_0_20px_0_#16b98122]
            `}
            tabIndex={0}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4 text-left">
              Education
            </h3>
            <div className="font-semibold text-white mb-1">
              B.Sc in Software Engineering
            </div>
            <div className="text-sm text-gray-400 mb-4">
              Islamic University of Technology
              <br />
              2022 – Present
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-100 text-base pl-3">
              <li>CGPA: 3.46/4.00 (Till 5th Semester)</li>
              <li>Relevant: Data Structures, AI, Web Dev, Cloud Computing</li>
            </ul>
          </div>

          {/* Work Experience Card */}
          <div
            className={`
              h-full flex flex-col justify-between rounded-2xl p-7 bg-black
              shadow-md border border-[#232a22] transition-all duration-200
              hover:scale-[1.025] hover:shadow-[0_0_20px_0_#16b98122]
            `}
            tabIndex={0}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4 text-left">
              Work Experience
            </h3>
            <div className="font-semibold text-white mb-1">
              Software Developer @ RES Tech
            </div>
            <div className="text-sm text-gray-400 mb-4">2024 – Present</div>
            <ul className="list-disc list-inside space-y-2 text-gray-100 text-base pl-3">
              <li>System design & frontend for ace-portfolio</li>
              <li>Landing page dev for Podcast Shorts (Rat@Studios)</li>
              <li>UI/UX and research on multiple projects</li>
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
