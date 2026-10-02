import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes } from "../context/ThemeContext";
import { projects } from "../constants";
import { handleHireMeClick } from "../utils/email";
import {
  Search,
  ArrowRight,
  Briefcase,
  Code2,
  FolderGit2,
  Trophy,
  Mail,
  Copy,
  Check,
  FileText,
  ExternalLink,
  Palette,
  Sparkles,
  Command,
  CornerDownLeft,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const { theme, setAccent } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pratyaksh1594@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Base Commands Definition
  const allCommands = [
    // Section Navigation
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Skills & Tech Stack",
      subtitle: "Explore languages, AI frameworks & tools",
      icon: <Code2 className="w-4 h-4 text-indigo-500" />,
      action: () => scrollToSection("tech"),
      keywords: ["skills", "tech", "python", "react", "nextjs", "stack"],
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Work Experience",
      subtitle: "Samaveda Capital, Amazon MLSS, GSSoC, IBM",
      icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      action: () => scrollToSection("experience"),
      keywords: ["experience", "jobs", "work", "internship", "samaveda", "amazon"],
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Projects Showcase",
      subtitle: "CitizenCare, DevCollab, Auditor Agent & more",
      icon: <FolderGit2 className="w-4 h-4 text-sky-500" />,
      action: () => scrollToSection("work"),
      keywords: ["projects", "work", "apps", "code", "citizencare", "devcollab"],
    },
    {
      id: "nav-achievements",
      category: "Navigation",
      title: "Honors & Achievements",
      subtitle: "Amazon MLSS top 5%, Juspay top 5%, DSA excellence",
      icon: <Trophy className="w-4 h-4 text-amber-500" />,
      action: () => scrollToSection("achievements"),
      keywords: ["achievements", "awards", "amazon", "juspay", "dsa", "certifications"],
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact & Socials",
      subtitle: "Email, LinkedIn, GitHub & channels",
      icon: <Mail className="w-4 h-4 text-violet-500" />,
      action: () => scrollToSection("contact"),
      keywords: ["contact", "email", "reach", "message", "hire"],
    },

    // Quick Actions
    {
      id: "act-resume",
      category: "Quick Actions",
      title: "View Resume (PDF)",
      subtitle: "Open latest resume in Google Drive",
      icon: <FileText className="w-4 h-4 text-emerald-600" />,
      action: () => {
        window.open(
          "https://drive.google.com/file/d/1f_tVjlefw_WFc0gBkleYe_H84luB5oj8/view?usp=sharing",
          "_blank"
        );
        setIsOpen(false);
      },
      keywords: ["resume", "cv", "pdf", "download", "credentials"],
    },
    {
      id: "act-copy-email",
      category: "Quick Actions",
      title: copied ? "Copied to Clipboard!" : "Copy Email Address",
      subtitle: "pratyaksh1594@gmail.com",
      icon: copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-600" />,
      action: handleCopyEmail,
      keywords: ["copy", "email", "mail", "gmail", "address"],
    },
    {
      id: "act-hire",
      category: "Quick Actions",
      title: "Hire Me / Send Inquiry",
      subtitle: "Compose direct email inquiry",
      icon: <Sparkles className="w-4 h-4 text-indigo-600" />,
      action: (e) => {
        setIsOpen(false);
        handleHireMeClick(e);
      },
      keywords: ["hire", "inquiry", "job", "offer", "contract"],
    },
    {
      id: "act-github",
      category: "Quick Actions",
      title: "Open GitHub Profile",
      subtitle: "github.com/PRATYAKSH15",
      icon: <FaGithub className="w-4 h-4 text-slate-800" />,
      action: () => {
        window.open("https://github.com/PRATYAKSH15", "_blank");
        setIsOpen(false);
      },
      keywords: ["github", "code", "repos", "repositories", "git"],
    },
    {
      id: "act-linkedin",
      category: "Quick Actions",
      title: "Open LinkedIn Profile",
      subtitle: "Connect with Pratyaksh on LinkedIn",
      icon: <FaLinkedin className="w-4 h-4 text-blue-600" />,
      action: () => {
        window.open("https://www.linkedin.com/in/pratyaksh-989922256/", "_blank");
        setIsOpen(false);
      },
      keywords: ["linkedin", "network", "connect"],
    },
    {
      id: "act-leetcode",
      category: "Quick Actions",
      title: "Open LeetCode Profile",
      subtitle: "700+ solved problems & contest stats",
      icon: <SiLeetcode className="w-4 h-4 text-amber-500" />,
      action: () => {
        window.open("https://leetcode.com/PRATYAKSH1594/", "_blank");
        setIsOpen(false);
      },
      keywords: ["leetcode", "dsa", "coding", "algorithms"],
    },

    // Dynamic Project Jumps
    ...projects.map((p) => ({
      id: `proj-${p.name}`,
      category: "Projects",
      title: p.name,
      subtitle: p.tags.map((t) => t.name).slice(0, 3).join(" • "),
      icon: <FolderGit2 className="w-4 h-4 text-indigo-500" />,
      action: () => {
        scrollToSection("work");
      },
      keywords: [p.name.toLowerCase(), ...p.tags.map((t) => t.name.toLowerCase())],
    })),

    // Accent Theme Switching
    ...themes.map((t) => ({
      id: `theme-${t.id}`,
      category: "Switch Theme",
      title: `Switch Accent to ${t.name}`,
      subtitle: t.tag,
      icon: (
        <span
          className="w-3.5 h-3.5 rounded-full shadow-xs shrink-0"
          style={{ backgroundColor: t.color }}
        />
      ),
      action: () => {
        setAccent(t.id);
        setIsOpen(false);
      },
      keywords: ["theme", "color", "accent", t.id, t.name.toLowerCase()],
    })),
  ];

  // Filter commands by query
  const filtered = allCommands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.keywords.some((k) => k.includes(q))
    );
  });

  // Handle Arrow navigation
  const handleKeyNavigation = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action(e);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-hidden">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col z-10 max-h-[80vh]"
        >
          {/* Search Header Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search (projects, resume, theme)..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyNavigation}
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
            />
            <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
              ESC
            </span>
          </div>

          {/* Commands List */}
          <div ref={listRef} className="overflow-y-auto p-2 space-y-1 divide-y divide-slate-50 flex-1">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-sm">
                No matching results for "<span className="font-semibold text-slate-700">{query}</span>"
              </div>
            ) : (
              filtered.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    data-active={isSelected}
                    onClick={(e) => cmd.action(e)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 group ${
                      isSelected
                        ? "bg-slate-100/90 shadow-xs"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0">
                        {cmd.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {cmd.title}
                          </p>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            {cmd.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate">
                          {cmd.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <CornerDownLeft className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar with Keyboard Hints */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <div className="flex items-center gap-3">
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-mono shadow-xs mr-1">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-mono shadow-xs mr-1">↓</kbd>
                to navigate
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-mono shadow-xs mr-1">↵</kbd>
                to select
              </span>
            </div>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-mono shadow-xs mr-1">esc</kbd>
              to close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
