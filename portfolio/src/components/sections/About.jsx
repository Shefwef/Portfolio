import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const About = () => {
  const languages = [
   "C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Solidity"
  ];

  const frameworks = ["React", "Node.js", "Next.js", "Express.js", "FastAPI", "NumPy"," Scikit-learn", "Tensor-Flow"];

  const cloudDevOps = ["Git", "GitHub", "Render", "Vercel", "Docker", "AWS", "Azure", "Postman", "SwaggerUI"];

  const designTools = ["Figma", "Canva", "Adobe Photoshop"];

  const developmentTools = ["WordPress", "BotPress"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A software engineering undergrad passionate about full-stack development, AI, and cloud solutions. I focus on clean, scalable code and user experience, turning ideas into high-impact digital solutions. I enjoy tackling real-time apps, experimenting with new technologies, and collaborating in great teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Proficient Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                                             className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                     hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOps.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Design & Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[...designTools, ...developmentTools].map((tool, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Sc in Software Engineering </strong> - Islamic University of Technology (3rd Year)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    {" "}
                   Software Developer @ RESTech (2024 - Present){" "}
                  </h4>
                  <li>
                  System design and frontend development for ace-portfolio
                  </li>
                  <li>
                  Developed landing page for Podcast Shorts by Rat@Studios
                  </li>
                  <li>
                  Conducted UI/UX design and research on multiple small projects
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
