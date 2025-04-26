import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-[#1d1836] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-purple-500/20 transition duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold">{experience.title}</h3>
          <p className="text-sm text-secondary">{experience.company_name}</p>
          <p className="text-xs text-gray-400">{experience.date}</p>
        </div>
      </div>

      <ul className="list-disc list-inside space-y-2 text-white-100 text-sm pl-2">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} index={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
