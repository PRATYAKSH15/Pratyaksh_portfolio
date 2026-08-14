import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { handleHireMeClick } from "../utils/email";
import {
  FaEnvelope,
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaEye,
  FaRocket,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

const socials = [
  {
    href: "mailto:pratyaksh1594@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
    color: "from-pink-500 to-red-500",
    isEmail: true,
  },
  {
    href: "https://www.linkedin.com/in/pratyaksh-989922256/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color: "from-blue-500 to-cyan-500",
  },
  {
    href: "https://github.com/PRATYAKSH15",
    icon: <FaGithub />,
    label: "GitHub",
    color: "from-gray-700 to-black",
  },
  {
    href: "https://x.com/Pratyaksh_1509",
    icon: <FaXTwitter />,
    label: "X.com",
    color: "from-gray-600 to-gray-900",
  },
  {
    href: "https://drive.google.com/file/d/1osI2rC8PxNYxwXS9NLwhhb0ff1LQqRhY/view?usp=drivesdk",
    icon: <FaEye />,
    label: "Resume",
    color: "from-green-400 to-emerald-600",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pratyaksh1594@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="xl:mt-16 flex xl:flex-row flex-col-reverse gap-12 overflow-hidden">
      {/* Toast notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-sm font-semibold border border-emerald-400"
          >
            <FaCheck className="w-4 h-4" /> Email Copied to Clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Panel - Connect with Me */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black/40 backdrop-blur-md border border-white/10 
                   p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6"
      >
        {/* Heading */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 
                       font-black text-[32px] text-center">
          Let’s Connect 🚀
        </h2>
        <p className="text-secondary text-center mb-4">
          I’m always open to collaborations, opportunities, or just a chat!
        </p>

        {/* Quick Email Display with Copy */}
        <div className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3 text-sm">
          <a
            href="mailto:pratyaksh1594@gmail.com"
            onClick={handleHireMeClick}
            className="text-gray-300 hover:text-purple-400 font-mono truncate transition-colors underline-offset-4 hover:underline"
            title="Send Email"
          >
            pratyaksh1594@gmail.com
          </a>
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="px-3 py-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white font-medium flex items-center gap-1.5 transition-all text-xs shrink-0 active:scale-95"
          >
            {copied ? <FaCheck className="w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Social Links */}
        <div className="w-full flex flex-col gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              onClick={s.isEmail ? handleHireMeClick : undefined}
              target={s.isEmail ? undefined : "_blank"}
              rel={s.isEmail ? undefined : "noopener noreferrer"}
              className={`flex items-center gap-3 justify-center 
                bg-gradient-to-r ${s.color} text-white font-medium py-3 px-4 
                rounded-lg shadow-md transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_20px_rgba(145,94,255,0.6)]`}
            >
              <span className="text-lg">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right Panel - Animated Rocket */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.15,
            rotate: 360,
            transition: { duration: 1.2 },
          }}
          className="relative"
        >
          {/* Main Rocket */}
          <FaRocket className="text-[10rem] md:text-[12rem] lg:text-[15rem] 
                              text-purple-500 hover:text-pink-500 transition-colors duration-500" />

          {/* Flame */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-8 h-8 bg-yellow-400 rounded-full blur-sm"></div>
            <div className="w-6 h-12 bg-red-500 rounded-full blur-sm mt-[-15px]"></div>
          </motion.div>

          {/* Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 6 + 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 4,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
