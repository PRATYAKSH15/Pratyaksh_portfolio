import React from "react";
import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <div className="bg-[#1a1a2e] p-4 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition duration-300 w-full sm:w-[330px]">
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          {/* {demo_link && (
            <button
              onClick={() => window.open(demo_link, "_blank")}
              className="text-sm bg-white text-black px-3 py-2 rounded-md font-semibold hover:bg-purple-300"
            >
              Live Demo
            </button>
          )} */}
          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="text-sm border border-white text-white px-3 py-2 rounded-md font-semibold hover:bg-white hover:text-black"
            >
              Source code{" "}
              <img
                src={github}
                alt="Github"
                className=" bg-black rounded inline-block w-4 h-4 ml-1"
              />
            </button>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <p className="text-sm mt-2 text-gray-400">{description}</p>
      </div>

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

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/PRATYAKSH15"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          For more projects, view my GitHub →
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
