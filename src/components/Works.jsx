import React from "react";
import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo }) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition-shadow duration-300">
        
        {/* Image */}
        <div className="relative group">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-black hover:bg-purple-600 hover:text-white transition"
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </a>
            )}
            {live_demo && (
              <a
                href={live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-black hover:bg-indigo-600 hover:text-white transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-300 mt-2">{description}</p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-xs ${tag.color} bg-white/5 border border-white/10 px-2 py-1 rounded-full`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <div className="text-center">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto">
        A collection of my projects that reflect real-world problem solving,
        creativity, and technical ability — with source code & live demos to explore.
      </p>

      {/* Grid layout */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-14 flex justify-center">
        <a
          href="https://github.com/PRATYAKSH15"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View more on GitHub →
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
