import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#f8fafc] text-slate-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900 font-sans">
        <Analytics />
        <SpeedInsights />
        <ScrollProgress />
        <RippleEffect />
        <ScrollToTop />

        {/* Ambient Decorative Light Orbs & Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[-5%] left-[25%] w-[650px] h-[650px] bg-gradient-to-br from-indigo-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-bl from-sky-100/40 via-indigo-100/25 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        </div>

        {/* Header & Hero */}
        <div className="relative">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections with generous modern spacing & light cards */}
        <div className="relative z-10 space-y-4 sm:space-y-8">
          <Tech />
          <Experience />
          <Works />
          <Achievements />
        </div>

        {/* Contact and Footer with soft subtle canvas */}
        <div className="relative z-10 mt-16">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
