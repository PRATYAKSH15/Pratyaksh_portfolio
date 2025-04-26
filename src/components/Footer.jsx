import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-xl font-bold tracking-wide text-white">
          Developed with ❤️ by Pratyaksh 
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://leetcode.com/PRATYAKSH1594/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-yellow-400 transition" />
          </a>
          <a href="https://www.naukri.com/code360/profile/PRATYAKSH" target="_blank" rel="noopener noreferrer">
            <FaCode className="hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/PRATYAKSH15" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.linkedin.com/in/pratyaksh-989922256/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://x.com/Pratyaksh_1509" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-white transition" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Pratyaksh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
