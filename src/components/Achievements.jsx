import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Award, Trophy, Target, Sparkles, CheckCircle } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
    iconBg: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    stat: "Top 5%",
    statLabel: "3,000 / 60,000+",
    title: "Amazon ML Summer School 2025",
    description:
      "Selected in the top 5% among 60,000+ applicants nationwide for Amazon's intensive Machine Learning, Deep Learning, and GenAI curriculum.",
    tag: "Machine Learning",
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    stat: "Top 5%",
    statLabel: "200,000+ Participants",
    title: "Juspay Hiring Challenge",
    description:
      "Ranked in the top 5% across 200,000+ engineers nationwide by successfully clearing competitive algorithmic rounds.",
    tag: "Competitive Coding",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
    stat: "Top 10%",
    statLabel: "National Level",
    title: "Competitive Programming",
    description:
      "Ranked in the top 10% in CodeClash and AlgoUtsav (NIT Rourkela), demonstrating algorithmic speed and precision.",
    tag: "Algorithms & Speed",
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    stat: "90%+",
    statLabel: "Certificate of Excellence",
    title: "Data Structures & Algorithms",
    description:
      "Achieved a 90%+ score in rigorous C++ Data Structures & Algorithms, earning a Certificate of Excellence from Coding Ninjas.",
    tag: "DSA Excellence",
  },
];

const AchievementCard = ({ index, icon, iconBg, badgeColor, stat, statLabel, title, description, tag }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Header with Icon, Tag, and Big Stat */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl border ${iconBg} shadow-xs`}>
              {icon}
            </div>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}`}>
                {tag}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              {stat}
            </span>
            <p className="text-[10px] text-slate-500 font-semibold">{statLabel}</p>
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-slate-900 text-lg font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Verified Credential</span>
      </div>
    </motion.div>
  );
};

import { useTheme } from "../context/ThemeContext";

const Achievements = () => {
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
          Proven Track Record
        </span>
        <h2 className={styles.sectionHeadText}>
          Honors & <span className="text-gradient-brand">Achievements</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Recognitions highlighting competitive excellence, problem solving, 
          and competitive rankings among top engineering talent nationwide.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {achievements.map((ach, idx) => (
          <AchievementCard key={`ach-${idx}`} index={idx} {...ach} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
