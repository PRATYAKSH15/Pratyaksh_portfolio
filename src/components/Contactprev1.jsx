import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { FaEnvelope, FaLinkedin, FaXTwitter,FaGithub, FaEye } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Panel - Connect with Me */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-10 rounded-2xl flex flex-col items-center gap-6"
      >
        <h2 className="text-white font-black text-[30px] text-center">
          Connect with Me  <span className="inline-block">👋</span>
        </h2>
        <p className="text-secondary text-center">
          Follow me on my social media platforms:
        </p>

        <div className="w-full flex flex-col gap-4">
          <a
            href="mailto:pratyaksh1594@gmail.com"
            target="_blank"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaEnvelope /> pratyaksh1594@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/pratyaksh-989922256/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/PRATYAKSH15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaGithub /> Github
          </a>

          <a
            href="https://x.com/Pratyaksh_1509"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaXTwitter /> X.com
          </a>

          <a
            href="https://drive.google.com/file/d/1ufGl8Vdy-d3MSmH_8WdG-o65tf_SNXgV/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaEye /> Resume
          </a>
        </div>
      </motion.div>

      {/* Right Panel - Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
