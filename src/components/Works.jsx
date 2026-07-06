import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={400}
        className="h-full"
      >
        <div className="group relative h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-[1px] hover:from-[#915EFF]/60 hover:to-[#915EFF]/10 transition-colors duration-300">
          <div className="h-full flex flex-col rounded-2xl bg-[#0d0d1a]/95 backdrop-blur-md overflow-hidden shadow-lg group-hover:shadow-[0_0_35px_rgba(145,94,255,0.25)] transition-shadow duration-300">

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-3 pb-5">
                {source_code_link && (
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View source code"
                    className="p-2.5 rounded-full bg-white text-black hover:bg-[#915EFF] hover:text-white transition-colors duration-200 shadow-md"
                  >
                    {github ? (
                      <img src={github} alt="GitHub" className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                  </a>
                )}
                {demo_link && (
                  <a
                    href={demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live demo"
                    className="p-2.5 rounded-full bg-white text-black hover:bg-[#915EFF] hover:text-white transition-colors duration-200 shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white text-lg font-bold tracking-tight">{name}</h3>
              <p className="text-sm text-secondary mt-2 leading-[22px] flex-1">
                {description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={`${name}-${tag.name}`}
                    className={`text-xs font-medium ${tag.color} bg-white/5 border border-white/10 px-2.5 py-1 rounded-full`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
      >
        A collection of my projects that reflect real-world problem solving,
        creativity, and technical ability — with source code & live demos to explore.
      </motion.p>

      {/* Project count badge */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-6 flex justify-center">
        <span className="text-xs font-semibold tracking-wide uppercase text-[#915EFF] bg-[#915EFF]/10 border border-[#915EFF]/30 px-4 py-1.5 rounded-full">
          {projects.length} Projects Built
        </span>
      </motion.div>

      {/* Grid layout */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-14 flex justify-center"
      >
        <a
          href="https://github.com/PRATYAKSH15"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
        >
          View more on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");