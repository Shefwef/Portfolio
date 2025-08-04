import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const About = () => {
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

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-transparent"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 bg-green-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            I’m a software engineering undergrad passionate about full-stack
            development, AI, and cloud solutions. I focus on clean, scalable
            code and building user-centric products. I love turning ideas into
            reality, exploring new tech, and collaborating in dynamic teams.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={`
                  rounded-xl p-6 border-2 border-emerald-700 flex flex-col bg-black
                  shadow transition-all duration-200 min-h-[225px]
                  hover:shadow-[0_0_20px_2px_#6ee7b7] hover:scale-105
                  focus-within:shadow-[0_0_20px_2px_#6ee7b7] focus-within:scale-105
                `}
                tabIndex={0}
              >
                <h3 className="font-semibold text-lg text-green-400 mb-6 text-center tracking-wide">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 w-full mt-2">
                  {skill.items.map((item, key) => (
                    <span
                      key={key}
                      className="bg-emerald-800/20 text-white py-1 px-3 rounded-full text-sm font-medium border border-emerald-900/30 transition hover:scale-105 hover:bg-green-800/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Work Section */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-10">
            <div
              className={`
                flex-1 rounded-xl py-6 px-7 border-2 border-emerald-700 flex flex-col shadow
                bg-black transition-all duration-200 min-h-[215px]
                hover:shadow-[0_0_28px_2px_#10b981cc] hover:scale-[1.04]
                focus-within:shadow-[0_0_28px_2px_#10b981cc] focus-within:scale-[1.04]
              `}
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                Education
              </h3>
              <ul className="text-gray-200 space-y-2 text-base">
                <li>
                  <span className="font-bold">
                    B.Sc in Software Engineering
                  </span>
                  <br />
                  Islamic University of Technology (2022 – Present)
                </li>
              </ul>
            </div>
            <div
              className={`
                flex-1 rounded-xl py-6 px-7 border-2 border-emerald-700 flex flex-col shadow
                bg-black transition-all duration-200 min-h-[215px]
                hover:shadow-[0_0_28px_2px_#10b981cc] hover:scale-[1.04]
                focus-within:shadow-[0_0_28px_2px_#10b981cc] focus-within:scale-[1.04]
              `}
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                Work Experience
              </h3>
              <div className="text-gray-200 space-y-2 text-base">
                <div>
                  <span className="font-bold">
                    Software Developer @ RES Tech
                  </span>
                  <br />
                  <span className="text-sm text-gray-400">2024 – Present</span>
                  <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                    <li>System design & frontend for ace-portfolio</li>
                    <li>Landing page dev for Podcast Shorts (Rat@Studios)</li>
                    <li>UI/UX and research on multiple projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
