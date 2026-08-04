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
    name: "LeetCode",
    icon: <SiLeetcode size={26} />,
    url: "https://leetcode.com/PRATYAKSH1594/",
  },
  {
    name: "Code360",
    icon: <FaCode size={26} />,
    url: "https://www.naukri.com/code360/profile/PRATYAKSH",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={26} />,
    url: "https://github.com/PRATYAKSH15",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={26} />,
    url: "https://www.linkedin.com/in/pratyaksh-989922256/",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter size={26} />,
    url: "https://x.com/Pratyaksh_1509",
  },
];

const stats = [
  { value: "5+", label: "AI & RAG Pipelines" },
  { value: "10+", label: "Full-Stack Workflows" },
  { value: "700+", label: "DSA Solved" },
  { value: "Top 5%", label: "Amazon MLSS Rank" },
];

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      {/* Intro above image */}
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.8)}
        className="text-center mb-8"
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF] underline">Pratyaksh</span>
        </h1>

        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-purple-200">
            <Typewriter
              words={["AI Engineer", "Full Stack Developer", "RAG & Agentic AI Builder"]}
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
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <img
              src={mypic}
              alt="profile"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full object-cover border-4 border-[#915EFF] shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right: About Content & CTAs */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[16px] sm:text-[17px] leading-[28px] max-w-2xl"
          >
            I'm Pratyaksh, a B.Tech graduate in Information Technology from
            USICT, GGSIPU, currently working as an SDE Intern at Samaveda
            Capital, where I build production AI systems using RAG and
            agentic pipelines. I specialize in full-stack development with
            Next.js, React, and Node.js, backed by Python and FastAPI on the
            backend, with strong experience across both SQL and NoSQL
            databases.
            <br />
            <br />
            I was selected for Amazon's ML Summer School out of 65,000+
            applicants, and I love turning ideas into real, working products —
            not just demos. I build my own systems end-to-end, including
            CitizenCare, an AI-powered civic issue tracking platform, and an
            AI Profile Builder using Gemini AI. I also mentor contributors in
            GenAI and full-stack development through GirlScript Summer of
            Code.
          </motion.p>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full max-w-2xl">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl text-center hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-purple-400 font-extrabold text-lg sm:text-xl">{st.value}</p>
                <p className="text-secondary text-xs mt-0.5">{st.label}</p>
              </div>
            ))}
          </div>

          {/* Dual Action Buttons */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1osI2rC8PxNYxwXS9NLwhhb0ff1LQqRhY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-2xl border border-purple-400/40 bg-gradient-to-r from-purple-800 to-purple-500 text-white font-semibold text-base shadow-md hover:shadow-purple-500/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base shadow-md hover:border-purple-400/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Social Links Bar with Tooltips */}
      <div className="mt-12 w-full max-w-xl rounded-full border border-purple-500/30 shadow-[0_0_20px_rgba(145,94,255,0.3)] bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-indigo-900/60 backdrop-blur-md px-6 py-3.5">
        <div className="flex justify-evenly items-center gap-4 flex-wrap">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="group relative text-white/80 hover:text-purple-300 transition-colors duration-300 p-2.5 rounded-full hover:bg-white/10 flex items-center justify-center"
            >
              {link.icon}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-black/90 border border-white/20 text-xs px-2.5 py-1 rounded-md text-white whitespace-nowrap shadow-lg pointer-events-none">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;