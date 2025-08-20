import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTensorflow, SiScikitlearn, SiHuggingface } from "react-icons/si";

const techCategories = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "Firebase" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Deep Learning" },
      { name: "Neural Network" },
    ],
  },
  {
    category: "Generative AI",
    items: [
      { name: "NLP" },
      { name: "LLM" },
      { name: "Langchain" },
      { name: "HuggingFace", icon: <SiHuggingface /> },
    ],
  },
];

const Tech = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col items-center gap-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center"
      >
        🚀 My Tech Stack
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Category Tabs */}
        <div className="flex flex-wrap lg:flex-col gap-4 justify-center lg:w-1/3">
          {techCategories.map((tech, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-white border transition-all duration-300 ${
                active === index
                  ? "bg-gradient-to-r from-purple-500 to-blue-600 border-none shadow-lg shadow-purple-500/50"
                  : "bg-[#2e2e3f] border border-gray-600 hover:border-purple-400"
              }`}
            >
              {tech.category}
            </motion.button>
          ))}
        </div>

        {/* Skills Panel */}
        <div className="lg:w-2/3 relative min-h-[260px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-[0_0_35px_rgba(145,94,255,0.6)] hover:border-[#915EFF] hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-[#915EFF] text-xl sm:text-2xl font-bold mb-5">
                {techCategories[active].category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {techCategories[active].items.map((item, i) => (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    key={i}
                    className="flex items-center gap-2 bg-gradient-to-br from-[#1f1f2e] to-[#2b2b3c] text-white px-4 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md cursor-pointer hover:shadow-purple-500/40 transition"
                  >
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
