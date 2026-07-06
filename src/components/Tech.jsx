import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPytorch,
  SiLangchain,
  SiHuggingface,
  SiTypescript,
  SiFastapi,
  SiSupabase,
  SiDocker,
} from "react-icons/si";

const techCategories = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Cloud Computing", icon: "☁️" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Deep Learning", icon: <SiPytorch /> },
      { name: "Neural Network", icon: <SiNumpy /> },
    ],
  },
  {
    category: "Generative AI",
    items: [
      { name: "NLP", icon: "🗣️" },
      { name: "LLM", icon: "🤖" },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "HuggingFace", icon: <SiHuggingface /> },
      { name: "RAG", icon: "📚" },
      { name: "Agentic AI", icon: "🧠" },
    ],
  },
];

const Tech = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Heading */}
      <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-12">
        🚀 My Tech Stack
      </h2>

      {/* Grid by categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a1a2e] rounded-2xl shadow-lg p-6 border border-transparent hover:border-[#915EFF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.5)]"
          >
            <h3 className="text-[#915EFF] text-xl font-bold mb-5 text-center">
              {cat.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 place-items-center">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-white hover:text-[#915EFF] transition-colors duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");