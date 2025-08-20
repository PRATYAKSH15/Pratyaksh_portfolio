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
} from "react-icons/si";

const techCategories = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
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
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> }, // ✅ Added PostgreSQL
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


// import React from "react";
// import { SectionWrapper } from "../hoc";
// import { motion } from "framer-motion";

// const techStack = {
//   Languages: ["C", "C++", "Python"],
//   Frontend: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJS", "NextJS"],
//   Backend: ["NodeJS", "ExpressJS", "Firebase"],
//   Databases: ["MongoDB", "MySQL"],
//   "Machine Learning": [
//     "TensorFlow",
//     "scikit-learn",
//     "Deep Learning",
//     "Neural Network",
//   ],
//   "Generative AI": ["NLP", "LLM", "LangChain", "HuggingFace"],
// };

// const Tech = () => {
//   return (
//     <div className="w-full max-w-5xl mx-auto py-16 px-4">
//       {/* Heading */}
//       <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-10">
//         🚀 My Tech Stack
//       </h2>

//       {/* Code Editor Style Box */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="bg-[#1e1e2e] text-[#d4d4d4] rounded-xl overflow-hidden shadow-2xl border border-[#2e2e3f]"
//       >
//         {/* Editor Top Bar */}
//         <div className="flex items-center gap-2 px-4 py-2 bg-[#2b2b3c] border-b border-[#3a3a4d]">
//           <div className="w-3 h-3 rounded-full bg-red-500"></div>
//           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//           <div className="w-3 h-3 rounded-full bg-green-500"></div>
//           <p className="ml-3 text-sm text-gray-400">techStack.js</p>
//         </div>

//         {/* Code Area */}
//         <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
//           <pre>
//             <code>
//               <span className="text-purple-400">const</span>{" "}
//               <span className="text-pink-400">techStack</span>{" "}
//               <span className="text-white">= {"{"}</span>
//               {"\n"}
//               {Object.entries(techStack).map(([category, items], i) => (
//                 <div key={i} className="ml-6">
//                   <span className="text-green-400">"{category}"</span>
//                   <span className="text-white">: [</span>
//                   {items.map((item, j) => (
//                     <span key={j}>
//                       <span className="text-yellow-300">"{item}"</span>
//                       {j < items.length - 1 && (
//                         <span className="text-white">, </span>
//                       )}
//                     </span>
//                   ))}
//                   <span className="text-white">],</span>
//                   {"\n"}
//                 </div>
//               ))}
//               <span className="text-white">{"};"}</span>
//             </code>
//           </pre>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "tech");
