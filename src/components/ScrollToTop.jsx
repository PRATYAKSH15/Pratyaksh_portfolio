import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-purple-600/80 text-white backdrop-blur-md border border-purple-400/40 shadow-[0_0_20px_rgba(145,94,255,0.5)] hover:bg-purple-600 hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
