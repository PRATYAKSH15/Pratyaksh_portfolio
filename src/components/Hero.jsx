import { motion } from "framer-motion";
import { styles } from "../styles";
import { mypic } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Text and vertical line */}
      <div className="flex flex-col items-center gap-6">
        {/* <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 mt-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 sm:h-12 violet-gradient" />
        </div> */}

        <div className="mt-12">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pratyaksh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer &{" "}
            <span className="text-purple-200">AI-ML Enthusiast</span>
          </p>
        </div>
      </div>

      {/* Profile image (centered below text) */}
      <div className="mt-12">
        <img
          src={mypic} // or "/mypic.jpg" if placed in public
          alt="profile"
          className="w-[340px] h-[340px] rounded-full object-cover border-4 border-[#915EFF] shadow-xl"
        />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1ufGl8Vdy-d3MSmH_8WdG-o65tf_SNXgV/view?usp=drivesdk" // Replace with your actual resume URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-2xl border-white-100 bg-gradient-to-r from-purple-800 to-purple-500 text-white font-semibold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
