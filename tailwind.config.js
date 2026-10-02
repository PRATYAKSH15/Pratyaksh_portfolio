/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#64748b",
        tertiary: "#f8fafc",
        dark: "#0f172a",
        "slate-card": "#ffffff",
        "slate-border": "#e2e8f0",
        "slate-muted": "#f1f5f9",
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "Poppins", "sans-serif"],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 40px -10px rgba(99, 102, 241, 0.15), 0 8px 16px -4px rgba(99, 102, 241, 0.08)",
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.06)",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
}

/*
// tailwind.config.js
extend: {
  animation: {
    scroll: 'scroll 20s linear infinite',
  },
  keyframes: {
    scroll: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
}

*/