import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ExternalLink, Github, Star, Sparkles, Code2, ArrowUpRight } from "lucide-react";

const featuredProjects = ["CitizenCare", "DevCollab", "Auditor Agent", "Elevatr"];

const categories = ["All", "Featured", "AI & LLMs", "Full Stack"];

import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link, theme }) => {
  const isFeatured = featuredProjects.includes(name);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.2) }}
      className="h-full"
    >
      <div
        className={`h-full flex flex-col rounded-2xl bg-white border transition-all duration-300 overflow-hidden group ${
          isFeatured
            ? "border-slate-200/90 shadow-card hover:shadow-card-hover"
            : "border-slate-200/90 shadow-xs hover:shadow-card-hover hover:border-slate-300"
        }`}
        style={isFeatured ? { borderColor: `${theme.color}40` } : {}}
      >
        {/* Project Thumbnail with Action Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Featured Ribbon */}
          {isFeatured && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-amber-700 text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-amber-200 z-10">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" /> Featured
            </div>
          )}

          {/* Quick Action Overlay (desktop hover, always visible icon links on mobile) */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source Code"
                className="p-2.5 rounded-full bg-white text-slate-800 hover:scale-110 shadow-md transition-all duration-200"
                style={{ color: theme.primaryHex }}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {demo_link && (
              <a
                href={demo_link}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Live Application"
                className="p-2.5 rounded-full text-white hover:scale-110 shadow-md transition-all duration-200"
                style={{ backgroundColor: theme.primaryHex }}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Header & Quick Links on Mobile */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-slate-900 text-lg font-bold tracking-tight transition-colors">
              {name}
            </h3>

            <div className="flex items-center gap-1.5 sm:hidden">
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600"
                  aria-label="Source code"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {demo_link && (
                <a
                  href={demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-100"
                  style={{ color: theme.primaryHex }}
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-4 flex-1">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
            {tags.slice(0, 5).map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="text-[11px] font-medium text-slate-500 self-center">
                +{tags.length - 5} more
              </span>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            {source_code_link ? (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> Source Code
              </a>
            ) : (
              <span className="text-slate-500">Proprietary</span>
            )}

            {demo_link ? (
              <a
                href={demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold transition-colors"
                style={{ color: theme.primaryHex }}
              >
                Live Preview <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-slate-500 text-[11px]">Production system</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Featured") return featuredProjects.includes(project.name);
    if (activeTab === "AI & LLMs") {
      return (
        project.description.toLowerCase().includes("ai") ||
        project.description.toLowerCase().includes("groq") ||
        project.description.toLowerCase().includes("gemini") ||
        project.description.toLowerCase().includes("rag") ||
        project.description.toLowerCase().includes("llm")
      );
    }
    if (activeTab === "Full Stack") {
      return (
        project.description.toLowerCase().includes("mern") ||
        project.description.toLowerCase().includes("next.js") ||
        project.description.toLowerCase().includes("full-stack") ||
        project.description.toLowerCase().includes("react")
      );
    }
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-2 sm:px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-3 border transition-colors"
          style={{
            color: theme.primaryHex,
            backgroundColor: `${theme.color}12`,
            borderColor: `${theme.color}30`,
          }}
        >
          Portfolio Showcase
        </span>
        <h2 className={styles.sectionHeadText}>
          Featured <span className="text-gradient-brand">Projects</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Production systems, agentic AI architectures, and end-to-end applications 
          engineered for real-world impact and scale.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
        {categories.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-white shadow-sm scale-105"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: theme.primaryHex,
                      boxShadow: `0 4px 14px ${theme.color}35`,
                    }
                  : {}
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Projects Grid with layout animation */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              theme={theme}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Callout Banner */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100 rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-xs flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-2xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
          <Github className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-slate-900 text-xl font-bold">
            Looking for more code & experiments?
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
            Explore 30+ repositories, open-source pull requests, and algorithmic implementations on my GitHub.
          </p>
        </div>
        <a
          href="https://github.com/PRATYAKSH15"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs tracking-wide shadow-md hover:bg-slate-800 transition-all flex items-center gap-2"
        >
          View GitHub Profile <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "work");