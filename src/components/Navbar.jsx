import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((nav) => {
      const element = document.getElementById(nav.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 group-hover:scale-105 transition-transform duration-300">
            &lt;Pratyaksh /&gt;
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative text-[16px] font-medium cursor-pointer transition-colors duration-200 ${
                  active === nav.id ? "text-white font-semibold" : "text-secondary hover:text-white"
                }`}
                onClick={() => handleScrollToSection(nav.id)}
              >
                {nav.title}
                {active === nav.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                )}
              </li>
            ))}
          </ul>

          {/* Quick CTA */}
          <button
            onClick={() => handleScrollToSection("contact")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-md hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0d0d1a]/95 backdrop-blur-xl border border-white/10 absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-2xl shadow-2xl flex-col gap-4`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-purple-400 font-bold" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    handleScrollToSection(nav.id);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setToggle(false);
                handleScrollToSection("contact");
              }}
              className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm text-center shadow-md"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
