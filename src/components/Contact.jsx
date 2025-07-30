import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaEnvelope, FaLinkedin, FaXTwitter, FaGithub, FaEye, FaRocket } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Panel - Connect with Me */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-10 rounded-2xl flex flex-col items-center gap-6"
      >
        <h2 className="text-white font-black text-[30px] text-center">
          Connect with Me <span className="inline-block">👋</span>
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
            href="https://drive.google.com/file/d/1hJO8Icdp29XMLAcq2r8q31GsTBHEZ9uK/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaEye /> Resume
          </a>
        </div>
      </motion.div>

      {/* Enhanced Right Panel - Animated Rocket */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: [-10, 10, -10], // Floating up and down
            rotate: [0, 5, -5, 0], // Gentle rocking
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 1 },
          }}
          className="relative"
        >
          {/* Main Rocket */}
          <FaRocket className="text-[10rem] md:text-[12rem] lg:text-[15rem] text-purple-500 hover:text-pink-500 transition-colors duration-300" />
          
          {/* Animated Flame Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-full blur-sm"></div>
            <div className="w-6 h-12 bg-red-500 rounded-full blur-sm mt-[-15px]"></div>
          </motion.div>

          {/* Stars Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");