import React, { useState, useRef, useEffect } from "react";
import { useTheme, themes } from "../context/ThemeContext";
import { Palette, Check } from "lucide-react";

const AccentColorSwitcher = () => {
  const { accent, setAccent, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch accent theme"
        title={`Accent Theme: ${theme.name}`}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95"
      >
        <span
          className="w-3.5 h-3.5 rounded-full transition-transform duration-300 shadow-xs"
          style={{ backgroundColor: theme.color }}
        />
        <Palette className="w-3.5 h-3.5 text-slate-500" />
      </button>

      {/* Floating Popover Palette */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 p-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Accent Theme
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              4 Palettes
            </span>
          </div>

          <div className="space-y-1">
            {themes.map((t) => {
              const isSelected = accent === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setAccent(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs font-semibold transition-all duration-150 ${
                    isSelected
                      ? "bg-slate-100/90 text-slate-900 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full shadow-xs flex items-center justify-center shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </span>
                    <div>
                      <p className="leading-tight">{t.name}</p>
                      <p className="text-[10px] text-slate-400 font-normal">{t.tag}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccentColorSwitcher;
