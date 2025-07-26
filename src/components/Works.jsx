import React from "react";
import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import Marquee from "react-fast-marquee";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="w-[300px] sm:w-[330px] bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-md mx-4">
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-black"
            >
              <div className="flex items-center gap-1">
                Source Code
                <img
                  src={github}
                  alt="GitHub"
                  className="w-4 h-4 bg-black rounded"
                />
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-xs ${tag.color} bg-white/10 px-2 py-1 rounded`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        A collection of my projects that reflect real-world problem solving,
        creativity, and technical ability — with source code to explore.
      </p>

      <div className="mt-12">
        <Marquee gradient={false} speed={120} pauseOnHover={true} direction="left" loop={0}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Marquee>
      </div>

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
