import React from "react";
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
    items: [
      "Natural Language Processing (NLP)",
      "Large Language Models (LLM)",
      "Langchain",
      "Huggingface",
    ],
  },
];

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Tech Skills.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {techCategories.map((tech, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] hover:scale-[1.05] transition-transform duration-300 ease-in-out rounded-xl p-6 shadow-lg border border-[#915EFF]"
          >
            <h3 className="text-[#915EFF] text-2xl font-bold mb-4">
              {tech.category}:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              {tech.items.map((item, i) => (
                <li key={i} className="text-base sm:text-lg font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
