import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FaTrophy } from "react-icons/fa6";

const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="relative bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl min-w-[280px] sm:min-w-[300px] p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_45px_rgba(145,94,255,0.4)] group overflow-hidden"
  >
    {/* Floating badge */}
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
      className="absolute top-4 right-4 text-[#915EFF] text-xl bg-white/10 rounded-full p-2 shadow-md"
    >
      <FaTrophy />
    </motion.div>

    <p className="text-[16px] text-white leading-relaxed mb-6">
      {testimonial}
    </p>

    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <p className="text-white font-semibold text-[15px]">{name}</p>
        <p className="text-[13px] text-gray-300">{designation}, {company}</p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 w-full bg-gradient-to-br from-[#1a1a2e] via-[#1f1f3b] to-[#121225] rounded-[24px] py-12 px-6 sm:px-12 shadow-inner shadow-purple-800/10">
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <p className={`${styles.sectionSubText} text-purple-300`}>Milestones & Highlights</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>My Achievements</h2>
      </motion.div>

      {/* Scrollable layout on mobile, grid on desktop */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="snap-start shrink-0">
            <FeedbackCard index={index} {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievements");
