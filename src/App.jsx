import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Achievements,
  RippleEffect,
  ScrollProgress,
  ScrollToTop,
} from "./components";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-0 bg-[#f8fafc] text-slate-900 min-h-screen selection:bg-slate-200 selection:text-slate-900 font-sans transition-colors duration-300">
      <Analytics />
      <SpeedInsights />
      <ScrollProgress />
      <RippleEffect />
      <ScrollToTop />

      {/* Ambient Decorative Dynamic Light Orbs & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div
          className="absolute top-[-5%] left-[25%] w-[650px] h-[650px] rounded-full blur-3xl opacity-25 transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${theme.color} 0%, transparent 70%)` }}
        />
        <div
          className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${theme.secondaryHex || theme.color} 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${theme.color} 0%, transparent 70%)` }}
        />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      </div>

      {/* Header & Hero */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Main Sections */}
      <div className="relative z-10 space-y-4 sm:space-y-8">
        <Tech />
        <Experience />
        <Works />
        <Achievements />
      </div>

      {/* Contact and Footer */}
      <div className="relative z-10 mt-16">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
