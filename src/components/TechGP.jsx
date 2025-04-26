import React, { useState } from "react";
import { SectionWrapper } from "../hoc";

const techCategories = [
  {
    category: "Languages",
    items: ["C", "C++", "Python"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJS", "NextJS"],
  },
  {
    category: "Backend",
    items: ["NodeJS", "ExpressJS", "Firebase"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "scikit-learn", "Deep Learning", "Neural Network"],
  },
  {
    category: "Generative AI",
    items: ["NLP", "LLM", "Langchain", "Huggingface"],
  },
];

const Tech = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col items-center gap-10">
      <h2 className="text-white font-extrabold text-4xl md:text-5xl text-center">
        🚀 My Tech Stack
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Sidebar */}
        <div className="flex flex-row lg:flex-col gap-4 lg:w-1/3 justify-center">
          {techCategories.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300
                ${
                  active === index
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg scale-105"
                    : "bg-[#2e2e3f] hover:bg-[#444457]"
                }`}
            >
              {tech.category}
            </button>
          ))}
        </div>

        {/* Skill Display */}
        <div className="lg:w-2/3">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(145,94,255,0.6)] hover:border-[#915EFF] hover:scale-105">
            <h3 className="text-[#915EFF] text-2xl font-bold mb-6">
              {techCategories[active].category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {techCategories[active].items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1f1f2e] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:scale-105 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
