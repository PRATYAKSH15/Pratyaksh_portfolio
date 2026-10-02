import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { handleHireMeClick } from "../utils/email";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const channels = [
  {
    href: "https://www.linkedin.com/in/pratyaksh-989922256/",
    icon: <FaLinkedin className="w-5 h-5 text-blue-600" />,
    title: "LinkedIn",
    handle: "in/pratyaksh-989922256",
    desc: "Let's connect professionally and discuss opportunities",
    accent: "hover:border-blue-200 hover:bg-blue-50/40 group-hover:text-blue-600",
    badge: "Professional Network",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    href: "https://github.com/PRATYAKSH15",
    icon: <FaGithub className="w-5 h-5 text-slate-900" />,
    title: "GitHub",
    handle: "github.com/PRATYAKSH15",
    desc: "Explore 30+ repositories, systems, and open-source contributions",
    accent: "hover:border-slate-300 hover:bg-slate-50 group-hover:text-slate-900",
    badge: "30+ Repositories",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
  },
  {
    href: "https://leetcode.com/PRATYAKSH1594/",
    icon: <SiLeetcode className="w-5 h-5 text-amber-500" />,
    title: "LeetCode",
    handle: "leetcode.com/PRATYAKSH1594",
    desc: "700+ Data Structures & Algorithms problems solved across platforms",
    accent: "hover:border-amber-200 hover:bg-amber-50/40 group-hover:text-amber-600",
    badge: "700+ Solved",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    href: "https://drive.google.com/file/d/1f_tVjlefw_WFc0gBkleYe_H84luB5oj8/view?usp=sharing",
    icon: <ArrowUpRight className="w-5 h-5 text-emerald-600" />,
    title: "Curriculum Vitae",
    handle: "View Latest Resume",
    desc: "Detailed overview of work experience, education, and credentials",
    accent: "hover:border-emerald-200 hover:bg-emerald-50/40 group-hover:text-emerald-600",
    badge: "PDF Resume",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    href: "https://x.com/Pratyaksh_1509",
    icon: <FaXTwitter className="w-5 h-5 text-slate-800" />,
    title: "X (Twitter)",
    handle: "@Pratyaksh_1509",
    desc: "Follow my thoughts on engineering, AI workflows, and tech updates",
    accent: "hover:border-slate-300 hover:bg-slate-50 group-hover:text-slate-900",
    badge: "Tech Updates",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
  },
  {
    href: "https://www.naukri.com/code360/profile/PRATYAKSH",
    icon: <FaCode className="w-5 h-5 text-orange-500" />,
    title: "Code360",
    handle: "Coding Ninjas Profile",
    desc: "DSA excellence certification and competitive algorithmic challenges",
    accent: "hover:border-orange-200 hover:bg-orange-50/40 group-hover:text-orange-600",
    badge: "Excellence Certified",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
];

import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pratyaksh1594@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-2 sm:px-4">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-semibold border border-slate-700"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Email copied to clipboard: pratyaksh1594@gmail.com</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-3 border transition-colors"
          style={{
            color: theme.primaryHex,
            backgroundColor: `${theme.color}12`,
            borderColor: `${theme.color}30`,
          }}
        >
          Get In Touch
        </span>
        <h2 className={styles.sectionHeadText}>
          Let’s Connect & <span className="text-gradient-brand">Collaborate</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          I’m always open to discussing full-time SDE roles, AI engineering opportunities, 
          innovative projects, or just having a chat.
        </p>
      </div>

      {/* Primary Featured Direct Email Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 mb-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div
              className="w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg shrink-0 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${theme.primaryHex}, ${theme.secondaryHex})`,
                boxShadow: `0 6px 20px ${theme.color}35`,
              }}
            >
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight">
                  pratyaksh1594@gmail.com
                </h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm">
                Fastest way to reach me — response within 24 hours guaranteed
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>

            <a
              href="mailto:pratyaksh1594@gmail.com"
              onClick={handleHireMeClick}
              className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${theme.gradientClass} ${theme.gradientHover} text-white font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02] active:scale-95`}
              style={{ boxShadow: `0 4px 15px ${theme.color}35` }}
            >
              <Send className="w-4 h-4" /> Send Email
            </a>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Clock className="w-4 h-4 shrink-0" style={{ color: theme.primaryHex }} />
            <span>Response time: <strong className="text-slate-800">&lt; 24 hours</strong></span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: theme.primaryHex }} />
            <span>Location: <strong className="text-slate-800">New Delhi, India</strong></span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Status: <strong className="text-emerald-700">Open for hiring</strong></span>
          </div>
        </div>
      </div>

      {/* Grid of Verified Channels & Profiles */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
        {channels.map((ch, idx) => (
          <a
            key={idx}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group ${ch.accent}`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="p-2 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                  {ch.icon}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${ch.badgeColor}`}>
                  {ch.badge}
                </span>
              </div>

              <h4 className="text-slate-900 font-bold text-base tracking-tight mb-0.5">
                {ch.title}
              </h4>
              <p className="text-indigo-600 font-mono text-[11px] font-semibold mb-2 truncate">
                {ch.handle}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {ch.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
              <span>Visit Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
