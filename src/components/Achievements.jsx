import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// Achievements data
const achievements = [
  {
    icon: "🎓",
    title: "Amazon ML Summer School 2025",
    description:
      "Selected in the top 5% (3,000/60,000+) for Amazon ML Summer School 2025.",
  },
  {
    icon: "⭐",
    title: "Juspay Hiring Challenge",
    description:
      "Achieved top 5% among 200,000+ participants nationwide by clearing the first round.",
  },
  {
    icon: "🏆",
    title: "Competitive Programming",
    description:
      "Ranked in top 10% in CodeClash and AlgoUtsav (NIT Rourkela), enhancing algorithmic thinking and coding speed.",
  },
  {
    icon: "🥇",
    title: "Data Structures & Algorithms",
    description:
      "Scored 90%+ in a rigorous DSA course; awarded a Certificate of Excellence for top-tier performance.",
  },
];

// Card component
const AchievementCard = ({ icon, title, description }) => {
  return (
    <div className="h-full bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-md p-6 
      text-center flex flex-col items-center justify-center 
      hover:scale-105 transition-transform duration-300">
      <span className="text-4xl mb-3">{icon}</span>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="text-center"> {/* ✅ Center whole section */}
      <div>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements</h2>
      </div>

      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto">
        Highlights of my journey showcasing excellence in academics,
        problem-solving, and competitive programming.
      </p>

      {/* Grid layout for alignment */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {achievements.map((ach, idx) => (
          <AchievementCard key={`ach-${idx}`} {...ach} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
