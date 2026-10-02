import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 text-slate-600 pt-12 pb-8 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-100">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Pratyaksh<span className="text-indigo-600">.</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
                Portfolio 2026
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              SDE Intern at Samaveda Capital · Amazon ML Summer School Alumni · USICT GGSIPU
            </p>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://leetcode.com/PRATYAKSH1594/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-600 hover:text-amber-500 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-200"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href="https://www.naukri.com/code360/profile/PRATYAKSH"
              target="_blank"
              rel="noopener noreferrer"
              title="Code360"
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-600 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-200"
            >
              <FaCode className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/PRATYAKSH15"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyaksh-989922256/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/Pratyaksh_1509"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition-all duration-200"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Pratyaksh. Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
            <span>using React, Tailwind CSS, & Vite.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
