import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-2xl xs:w-[320px] w-full border border-gray-600 shadow-lg flex flex-col justify-between min-h-[280px]"
  >
    <p className="text-white tracking-wider text-[18px] mb-6">{testimonial}</p>

    <div className="flex justify-between items-center gap-3 mt-auto">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient"></span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} {company}
        </p>
      </div>

      {/* <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover border border-white"
      /> */}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
