import { motion } from "framer-motion";
import { styles } from "../styles";
import { mypic } from "../assets";
import { fadeIn } from "../utils/motion";
import { Typewriter } from "react-simple-typewriter";

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

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Intro above image */}
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.8)}
        className="text-center mb-8"
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Pratyaksh</span>
        </h1>

        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-purple-200">
            <Typewriter
              words={["Full Stack Developer", "AI-ML Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
      </motion.div>

      {/* Wrapper: 2-column layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl w-full">
        {/* Left: Profile Image */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.8)}
          className="flex justify-center lg:w-1/2"
        >
          <img
            src={mypic}
            alt="profile"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-[#915EFF] shadow-xl"
          />
        </motion.div>

        {/* Right: About Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[16px] sm:text-[17px] leading-[28px] max-w-2xl"
          >
            Hi, myself Pratyaksh — a Final year student currently pursuing my
            B.Tech in Information Technology from USICT, GGSIPU. I'm passionate
            about full-stack web development and have been building projects
            using the MERN stack. I enjoy turning ideas into functional,
            user-friendly apps that make an impact.
            <br />
            <br />
            I'm also deeply interested in Machine Learning and Generative AI,
            always exploring ways to integrate intelligent solutions into modern
            web applications. I'm a curious learner who thrives on collaboration
            and loves pushing boundaries to grow in the tech space.
          </motion.p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/11Jvuh4wqzK59PiDfTdIXMwLcr1ksd9Zz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-2xl border-white-100 bg-gradient-to-r from-purple-800 to-purple-500 text-white font-semibold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Social Links Below Both */}
      <div className="mt-12 w-full max-w-2xl rounded-full border-blue shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-gradient-to-r from-blue-300 to-purple-600 px-6 py-4">
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
    </section>
  );
};

export default Hero;
