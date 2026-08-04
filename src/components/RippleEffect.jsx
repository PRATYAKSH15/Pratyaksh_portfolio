import React, { useEffect, useState } from "react";

const RippleEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    // Smooth lerp function for liquid outer ring movement
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePosition = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });

      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over interactive elements
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A";

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Inertia animation loop for smooth outer ring
    const animateRing = () => {
      currentX = lerp(currentX, targetX, 0.18);
      currentY = lerp(currentY, targetY, 0.18);

      setRingPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {/* Outer Smooth Ring / Spotlight */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isHovered
            ? "w-12 h-12 bg-purple-500/15 border border-purple-400/80 shadow-[0_0_20px_rgba(145,94,255,0.4)] scale-125"
            : isClicked
            ? "w-8 h-8 bg-purple-500/20 border border-purple-400/60 scale-90"
            : "w-8 h-8 border border-purple-400/40 bg-purple-500/5 shadow-[0_0_10px_rgba(145,94,255,0.15)]"
        }`}
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Tiny Precision Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#915EFF] shadow-[0_0_8px_#915EFF] transition-transform duration-75 ease-out pointer-events-none ${
          isHovered ? "scale-150 bg-pink-400" : isClicked ? "scale-75" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default RippleEffect;
