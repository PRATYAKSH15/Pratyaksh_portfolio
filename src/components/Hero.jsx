import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { mypic } from "../assets";
import { fadeIn } from "../utils/motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowUpRight, Copy, Check, Sparkles, Mail, Briefcase, Award } from "lucide-react";

// Icons
import { FaGithub, FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "LeetCode",
    icon: <SiLeetcode size={20} />,
    url: "https://leetcode.com/PRATYAKSH1594/",
    color: "hover:text-amber-500 hover:border-amber-200 hover:bg-amber-50/50",
  },
  {
    name: "Code360",
    icon: <FaCode size={20} />,
    url: "https://www.naukri.com/code360/profile/PRATYAKSH",
    color: "hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50/50",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/PRATYAKSH15",
    color: "hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/pratyaksh-989922256/",
    color: "hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter size={20} />,
    url: "https://x.com/Pratyaksh_1509",
    color: "hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100",
  },
];

const stats = [
  { value: "5+", label: "Production AI & RAG", icon: "🤖" },
  { value: "10+", label: "Full-Stack Workflows", icon: "⚡" },
  { value: "700+", label: "DSA Problems Solved", icon: "🧠" },
  { value: "Top 5%", label: "Amazon MLSS (65K+)", icon: "🎯" },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pratyaksh1594@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-column Grid Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Headlines, Bio, Stats, CTAs */}
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 0.9)}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for SDE & AI Engineer Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Hi, I'm <span className="text-gradient-brand">Pratyaksh</span>
            </h1>

            {/* Sub-headline with dynamic typed roles */}
            <div className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 min-h-[36px] flex items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-500">Specializing in</span>
              <span className="text-indigo-600 font-bold underline decoration-indigo-300 underline-offset-4">
                <Typewriter
                  words={[
                    "Production AI Systems",
                    "RAG & Agentic Pipelines",
                    "Full-Stack Web Architectures",
                    "Next.js, FastAPI & LangChain",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1600}
                />
              </span>
            </div>

            {/* Bio paragraph */}
            <p className="mt-5 text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-2xl font-normal">
              B.Tech in Information Technology from <span className="font-semibold text-slate-800">USICT, GGSIPU</span>, 
              currently working as an <span className="font-semibold text-slate-800">SDE Intern at Samaveda Capital</span> building 
              production RAG & deal automation pipelines. Selected for <span className="font-semibold text-slate-800">Amazon ML Summer School</span> (top 5% of 65,000+ applicants), 
              building end-to-end full-stack products from idea to production scale.
            </p>

            {/* Dual CTAs & Quick Email Copy */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3.5 flex-wrap w-full">
              <a
                href="https://drive.google.com/file/d/1osI2rC8PxNYxwXS9NLwhhb0ff1LQqRhY/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5"
              >
                View Resume <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-xs hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get In Touch
              </button>

              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="px-4 py-3 rounded-xl bg-indigo-50/80 border border-indigo-200/70 text-indigo-700 hover:bg-indigo-100/80 font-medium text-xs flex items-center gap-1.5 transition-all duration-200 active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "pratyaksh1594@gmail.com"}
              </button>
            </div>

            {/* Quick Metrics Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-9 w-full max-w-2xl">
              {stats.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group"
                >
                  <div className="text-sm mb-1">{st.icon}</div>
                  <p className="text-indigo-600 font-extrabold text-xl sm:text-2xl tracking-tight group-hover:scale-105 transition-transform">
                    {st.value}
                  </p>
                  <p className="text-slate-500 text-xs font-medium mt-0.5 leading-snug">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-2.5 flex-wrap justify-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Find me on:
              </span>
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className={`p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-600 shadow-xs transition-all duration-200 hover:-translate-y-0.5 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Avatar with Floating Tech Badges */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.9)}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[42%] flex justify-center items-center relative"
          >
            <div className="relative">
              {/* Subtle background ambient ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 via-violet-200 to-sky-200 rounded-[2.5rem] blur-2xl opacity-60 animate-pulse-subtle" />

              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-[2rem] p-2 bg-white border border-slate-200 shadow-xl overflow-hidden group">
                <img
                  src={mypic}
                  alt="Pratyaksh"
                  className="w-full h-full object-cover rounded-[1.6rem] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: Samaveda Capital */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg px-3.5 py-2 rounded-2xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">SDE Intern</p>
                  <p className="text-[10px] text-slate-500 font-medium">Samaveda Capital</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Amazon MLSS */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg px-3.5 py-2 rounded-2xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Amazon MLSS</p>
                  <p className="text-[10px] text-amber-600 font-semibold">Top 5% Nationwide</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Fast Full-Stack */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:flex absolute bottom-8 -left-8 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg px-3 py-1.5 rounded-full items-center gap-1.5 text-xs font-semibold text-slate-700"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-100" />
                RAG & Next.js
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;