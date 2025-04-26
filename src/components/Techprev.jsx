import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Tech Skills.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 mb-3">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-white text-sm font-medium text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
