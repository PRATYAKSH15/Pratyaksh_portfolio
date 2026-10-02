import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { handleHireMeClick } from "../utils/email";
import { useTheme } from "../context/ThemeContext";
import AccentColorSwitcher from "./AccentColorSwitcher";
import { Sparkles, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
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
    <header
      className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between items-center`}>
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryHex}, ${theme.secondaryHex})`,
              boxShadow: `0 4px 14px ${theme.color}35`,
            }}
          >
            <Sparkles className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
              Pratyaksh<span style={{ color: theme.color }}>.</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 -mt-1 tracking-wider uppercase">
              AI & Full Stack
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs">
          <ul className="list-none flex flex-row gap-1 items-center">
            {navLinks.map((nav) => {
              const isActive = active === nav.id;
              return (
                <li
                  key={nav.id}
                  className={`text-sm font-medium cursor-pointer px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                  style={
                    isActive
                      ? {
                          color: theme.primaryHex,
                          backgroundColor: `${theme.color}15`,
                        }
                      : {}
                  }
                  onClick={() => handleScrollToSection(nav.id)}
                >
                  {nav.title}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick CTA Actions & Accent Color Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Accent Color Switcher */}
          <AccentColorSwitcher />

          <a
            href="https://drive.google.com/file/d/1osI2rC8PxNYxwXS9NLwhhb0ff1LQqRhY/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3.5 py-2 rounded-full border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 flex items-center gap-1"
          >
            Resume <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:pratyaksh1594@gmail.com"
            onClick={handleHireMeClick}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${theme.gradientClass} ${theme.gradientHover} text-white font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95`}
            style={{ boxShadow: `0 4px 15px ${theme.color}35` }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="sm:hidden flex items-center gap-2">
          <AccentColorSwitcher />

          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-slate-700 hover:text-slate-900"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {toggle && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-xl px-6 py-6 transition-all duration-300">
          <ul className="list-none flex flex-col gap-2">
            {navLinks.map((nav) => {
              const isActive = active === nav.id;
              return (
                <li
                  key={nav.id}
                  className={`text-base font-medium py-2.5 px-4 rounded-xl cursor-pointer transition-all ${
                    isActive ? "font-semibold" : "text-slate-700 hover:bg-slate-50"
                  }`}
                  style={
                    isActive
                      ? {
                          color: theme.primaryHex,
                          backgroundColor: `${theme.color}15`,
                        }
                      : {}
                  }
                  onClick={() => {
                    setToggle(false);
                    handleScrollToSection(nav.id);
                  }}
                >
                  {nav.title}
                </li>
              );
            })}
          </ul>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="https://drive.google.com/file/d/1osI2rC8PxNYxwXS9NLwhhb0ff1LQqRhY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm flex items-center justify-center gap-1.5 hover:bg-slate-50"
            >
              View Resume <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:pratyaksh1594@gmail.com"
              onClick={(e) => {
                setToggle(false);
                handleHireMeClick(e);
              }}
              className={`w-full text-center py-2.5 rounded-xl bg-gradient-to-r ${theme.gradientClass} text-white font-semibold text-sm shadow-md`}
              style={{ boxShadow: `0 4px 15px ${theme.color}35` }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
