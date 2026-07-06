import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Icons
import { FaGithub, FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    icon: <SiLeetcode size={28} />,
    url: "https://leetcode.com/PRATYAKSH1594/",
  },
  {
    icon: <FaCode size={28} />,
    url: "https://www.naukri.com/code360/profile/PRATYAKSH",
  },
  { icon: <FaGithub size={28} />, url: "https://github.com/PRATYAKSH15" },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/pratyaksh-989922256/",
  },
  { icon: <FaXTwitter size={28} />, url: "https://x.com/Pratyaksh_1509" },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] space-y-4 mx-auto"
      >
        <>
          Hi, myself Pratyaksh — I recently graduated with a B.Tech in
          Information Technology from USICT, GGSIPU. I'm currently working as
          an SDE Intern at Samaveda Capital, where I build production AI
          systems using RAG and agentic pipelines. I'm passionate about
          full-stack web development and have hands-on experience building
          scalable applications using the MERN and Next.js stacks, backed by
          Python and FastAPI on the backend.
          <br />
          <br />
          I'm also deeply interested in Machine Learning and Generative AI —
          I was selected for Amazon's ML Summer School out of 65,000+
          applicants, and I love turning ideas into real, working products
          rather than just demos. Beyond internships, I build my own systems
          end-to-end, including CitizenCare, an AI-powered civic issue
          tracking platform, and an AI Profile Builder using Gemini AI. I
          also mentor contributors in GenAI and full-stack development
          through GirlScript Summer of Code.
        </>
      </motion.p>

      {/* Social Links */}
      <div className="mt-16 w-full rounded-full border-blue shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-gradient-to-r from-blue-300 to-purple-600 px-6 py-4">
        <div className="flex justify-evenly items-center gap-6 flex-wrap">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-black/20"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");