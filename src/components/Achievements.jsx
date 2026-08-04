import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const achievements = [
  {
    icon: "🎓",
    title: "Amazon ML Summer School 2025",
    description:
      "Selected in the top 5% (3,000/60,000+) for Amazon ML Summer School 2025.",
    tag: "Machine Learning",
  },
  {
    icon: "⭐",
    title: "Juspay Hiring Challenge",
    description:
      "Achieved top 5% among 200,000+ participants nationwide by clearing the first round.",
    tag: "Competitive Coding",
  },
  {
    icon: "🏆",
    title: "Competitive Programming",
    description:
      "Ranked in top 10% in CodeClash and AlgoUtsav (NIT Rourkela), enhancing algorithmic thinking and coding speed.",
    tag: "Algorithms",
  },
  {
    icon: "🥇",
    title: "Data Structures & Algorithms",
    description:
      "Scored 90%+ in a rigorous DSA course; awarded a Certificate of Excellence for top-tier performance.",
    tag: "Excellence Award",
  },
];

const AchievementCard = ({ index, icon, title, description, tag }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      whileHover={{ y: -6 }}
      className="h-full bg-[#0d0d1a]/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#915EFF]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.25)] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl p-2 rounded-xl bg-white/5 border border-white/5 shadow-inner">
            {icon}
          </span>
          <span className="text-[11px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
            {tag}
          </span>
        </div>
        <h3 className="text-white text-lg font-bold text-left">{title}</h3>
        <p className="text-secondary text-sm mt-2 leading-[24px] text-left">{description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className="text-center">
      <div>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements</h2>
      </div>

      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto">
        Highlights of my journey showcasing excellence in academics,
        problem-solving, and competitive programming.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {achievements.map((ach, idx) => (
          <AchievementCard key={`ach-${idx}`} index={idx} {...ach} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
