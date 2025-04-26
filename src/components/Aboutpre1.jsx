import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Icons
import { FaGithub, FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a dedicated MERN stack developer with hands-on experience in
        building full-stack applications using MongoDB, Express.js, React, and
        Node.js. I'm also deeply interested in Machine Learning and Generative
        AI, constantly exploring ways to integrate intelligent solutions into
        modern web apps. I'm always excited to learn, collaborate, and turn
        ideas into impactful digital experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Social Links Slider */}
      <div className="mt-16 w-full rounded-full border-blue shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-gradient-to-r from-blue-300 to-purple-600 px-4 py-4">
        <div className="flex justify-evenly items-center gap-10 flex-wrap">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition-colors duration-300"
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
