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
  FaBrain,
  FaRobot,
  FaCloud,
  FaDatabase,
  FaComments,
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
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const techCategories = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { name: "NextJS", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
      { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Cloud", icon: <FaCloud className="text-[#915EFF]" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    ],
  },
  {
    category: "Generative AI",
    items: [
      { name: "NLP", icon: <FaComments className="text-pink-400" /> },
      { name: "LLM", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "LangChain", icon: <SiLangchain className="text-emerald-300" /> },
      { name: "HuggingFace", icon: <SiHuggingface className="text-yellow-400" /> },
      { name: "RAG", icon: <FaDatabase className="text-purple-400" /> },
      { name: "Agentic AI", icon: <FaBrain className="text-[#915EFF]" /> },
    ],
  },
];

const Tech = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-semibold">
          Skills & Toolkit
        </p>
        <h2 className="text-white font-extrabold md:text-[50px] sm:text-[40px] xs:text-[35px] text-[30px]">
          My Tech Stack
        </h2>
      </div>

      {/* Grid by categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="bg-[#0d0d1a]/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#915EFF]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.25)] flex flex-col justify-between"
          >
            <h3 className="text-[#915EFF] text-lg font-bold mb-6 text-center border-b border-white/10 pb-3 tracking-wide">
              {cat.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 place-items-center">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <div className="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/5 shadow-inner">
                    {item.icon}
                  </div>
                  <p className="text-xs font-medium text-center">{item.name}</p>
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