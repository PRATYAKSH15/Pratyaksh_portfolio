import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

const ExperienceCard = ({ experience, index, theme }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-10 pb-12 group last:pb-2"
    >
      {/* Timeline Continuous Line */}
      <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-0 w-[2px] bg-slate-200 group-last:hidden" />

      {/* Timeline Node Icon Badge */}
      <div
        className="absolute left-0 top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border-2 shadow-md flex items-center justify-center overflow-hidden z-10 group-hover:scale-110 transition-transform duration-300"
        style={{
          borderColor: theme.color,
          boxShadow: `0 4px 14px ${theme.color}25`,
        }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>

      {/* Main Experience Content Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-card-hover transition-all duration-300">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 mb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold tracking-tight">
                {experience.title}
              </h3>
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-md border"
                style={{
                  color: theme.primaryHex,
                  backgroundColor: `${theme.color}15`,
                  borderColor: `${theme.color}35`,
                }}
              >
                {experience.company_name}
              </span>
            </div>
          </div>

          {/* Date pill */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-full w-fit">
            <Calendar className="w-3.5 h-3.5" style={{ color: theme.primaryHex }} />
            <span>{experience.date}</span>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5">
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className="text-slate-600 text-sm sm:text-[15px] leading-relaxed flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-3 border transition-colors"
          style={{
            color: theme.primaryHex,
            backgroundColor: `${theme.color}12`,
            borderColor: `${theme.color}30`,
          }}
        >
          Career Milestones
        </span>
        <h2 className={styles.sectionHeadText}>
          Work <span className="text-gradient-brand">Experience</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Proven industry impact from early-stage AI engineering to high-scale open-source and enterprise workflows.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative mt-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
