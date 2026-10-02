import React, { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  {
    id: "indigo",
    name: "Electric Indigo",
    tag: "Default",
    color: "#6366f1",
    primaryHex: "#4f46e5",
    secondaryHex: "#7c3aed",
    gradientClass: "from-indigo-600 via-indigo-600 to-violet-600",
    gradientHover: "hover:from-indigo-700 hover:via-indigo-700 hover:to-violet-700",
    lightBgClass: "bg-indigo-50/80",
    borderClass: "border-indigo-200/80",
    textClass: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    previewClass: "bg-indigo-600",
  },
  {
    id: "emerald",
    name: "Emerald Green",
    tag: "SaaS / Vercel",
    color: "#10b981",
    primaryHex: "#059669",
    secondaryHex: "#0d9488",
    gradientClass: "from-emerald-600 via-emerald-600 to-teal-600",
    gradientHover: "hover:from-emerald-700 hover:via-emerald-700 hover:to-teal-700",
    lightBgClass: "bg-emerald-50/80",
    borderClass: "border-emerald-200/80",
    textClass: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    previewClass: "bg-emerald-600",
  },
  {
    id: "sapphire",
    name: "Royal Sapphire",
    tag: "Cloud / System",
    color: "#0284c7",
    primaryHex: "#0284c7",
    secondaryHex: "#2563eb",
    gradientClass: "from-sky-600 via-blue-600 to-indigo-600",
    gradientHover: "hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700",
    lightBgClass: "bg-sky-50/80",
    borderClass: "border-sky-200/80",
    textClass: "text-sky-600",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200/60",
    previewClass: "bg-sky-600",
  },
  {
    id: "rose",
    name: "Rose Violet",
    tag: "Linear Style",
    color: "#e11d48",
    primaryHex: "#e11d48",
    secondaryHex: "#c026d3",
    gradientClass: "from-rose-600 via-pink-600 to-fuchsia-600",
    gradientHover: "hover:from-rose-700 hover:via-pink-700 hover:to-fuchsia-700",
    lightBgClass: "bg-rose-50/80",
    borderClass: "border-rose-200/80",
    textClass: "text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200/60",
    previewClass: "bg-rose-600",
  },
];

const ThemeContext = createContext({
  accent: "indigo",
  theme: themes[0],
  setAccent: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [accent, setAccentState] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-accent-theme");
      if (saved && themes.some((t) => t.id === saved)) {
        return saved;
      }
    } catch (e) {
      // ignore localStorage error in private modes
    }
    return "indigo";
  });

  const currentTheme = themes.find((t) => t.id === accent) || themes[0];

  const setAccent = (themeId) => {
    setAccentState(themeId);
    try {
      localStorage.setItem("portfolio-accent-theme", themeId);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", accent);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ accent, theme: currentTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
