import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
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
  FaCode,
  FaServer,
  FaLayerGroup,
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
  SiRedux,
} from "react-icons/si";

const techCategories = [
  {
    category: "Generative AI & LLMs",
    badge: "Specialization",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: <FaBrain className="text-purple-600" />,
    items: [
      { name: "RAG Pipelines", icon: <FaDatabase className="text-indigo-600" />, highlight: true },
      { name: "Agentic AI", icon: <FaBrain className="text-purple-600" />, highlight: true },
      { name: "LangChain", icon: <SiLangchain className="text-emerald-600" /> },
      { name: "OpenAI / LLMs", icon: <SiOpenai className="text-emerald-700" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="text-amber-500" /> },
      { name: "NLP Systems", icon: <FaComments className="text-pink-500" /> },
    ],
  },
  {
    category: "Frontend & Full Stack",
    badge: "Core Stack",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: <FaLayerGroup className="text-blue-600" />,
    items: [
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-900" />, highlight: true },
      { name: "React.js", icon: <FaReact className="text-cyan-500" />, highlight: true },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-amber-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
    ],
  },
  {
    category: "Backend & Cloud",
    badge: "Scalability",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: <FaServer className="text-emerald-600" />,
    items: [
      { name: "FastAPI", icon: <SiFastapi className="text-teal-600" />, highlight: true },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-700" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-600" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
    ],
  },
  {
    category: "Databases & Storage",
    badge: "SQL & NoSQL",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: <FaDatabase className="text-indigo-600" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, highlight: true },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" />, highlight: true },
      { name: "MySQL", icon: <SiMysql className="text-sky-700" /> },
    ],
  },
  {
    category: "Machine Learning & Data",
    badge: "Amazon MLSS",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: <FaRobot className="text-amber-600" />,
    items: [
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-amber-600" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
    ],
  },
  {
    category: "Core Languages",
    badge: "Algorithms & DSA",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    icon: <FaCode className="text-rose-600" />,
    items: [
      { name: "C++", icon: <SiCplusplus className="text-blue-600" />, highlight: true },
      { name: "Python", icon: <FaPython className="text-amber-500" />, highlight: true },
      { name: "C", icon: <SiC className="text-slate-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
];

import { useTheme } from "../context/ThemeContext";

const Tech = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-2 sm:px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-3 border transition-colors"
          style={{
            color: theme.primaryHex,
            backgroundColor: `${theme.color}12`,
            borderColor: `${theme.color}30`,
          }}
        >
          Technical Proficiency
        </span>
        <h2 className={styles.sectionHeadText}>
          Skills & <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          A comprehensive toolkit spanning generative AI, full-stack systems, 
          and scalable cloud backends built for production environments.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-card-hover hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-base">
                    {cat.icon}
                  </span>
                  <h3 className="text-slate-900 font-bold text-base tracking-tight">
                    {cat.category}
                  </h3>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      item.highlight
                        ? "bg-indigo-50/50 border border-indigo-100 text-slate-800 hover:bg-indigo-100/60 hover:border-indigo-200"
                        : "bg-slate-50/80 border border-slate-200/60 text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle bottom count indicator */}
            <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>{cat.items.length} tools & frameworks</span>
              <span className="text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                Verified in projects →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");