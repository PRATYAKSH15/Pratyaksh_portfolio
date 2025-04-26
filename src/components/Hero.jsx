import { motion } from 'framer-motion';
import { styles } from '../styles';
import { mypic } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Text and vertical line */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 mt-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 sm:h-12 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pratyaksh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer & <span className="text-purple-200">AI-ML Enthusiast</span>
          </p>
        </div>
      </div>

      {/* Profile image (centered below text) */}
      <div className="mt-12">
        <img
          src= {mypic} // or "/mypic.jpg" if placed in public
          alt="profile"
          className="w-[340px] h-[340px] rounded-full object-cover border-4 border-[#915EFF] shadow-xl"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"> 
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
