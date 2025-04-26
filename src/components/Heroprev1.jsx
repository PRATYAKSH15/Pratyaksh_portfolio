import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Text and vertical line */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 sm:w-5 sm:h-5 mt-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-24 sm:h-32 violet-gradient" />
        </div>

        <div>
          <h1 className="text-white font-extrabold text-[36px] sm:text-[48px] lg:text-[64px] leading-tight">
            Hi, I'm <span className="text-[#915EFF]">Pratyaksh</span>
          </h1>
          <p className="mt-2 text-white-100 text-[16px] sm:text-[20px] lg:text-[24px] font-light">
            Full Stack Developer & <span className="text-purple-200">AI-ML Enthusiast</span>
          </p>
        </div>
      </div>

      {/* Profile image (centered below text) */}
      <div className="mt-10 sm:mt-12">
        <img
          src="src/components/mypic.jpg" // or "/mypic.jpg" if placed in public
          alt="profile"
          className="w-[220px] sm:w-[280px] lg:w-[340px] h-auto rounded-full object-cover border-4 border-[#915EFF] shadow-xl transition-transform hover:scale-105"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
