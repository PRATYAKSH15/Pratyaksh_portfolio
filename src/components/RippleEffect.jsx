import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const RippleEffect = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    if (typeof window !== "undefined" && window.matchMedia) {
      setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
    }

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

    const animateRing = () => {
      currentX = lerp(currentX, targetX, 0.2);
      currentY = lerp(currentY, targetY, 0.2);

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

  if (!isVisible || !isFinePointer) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {/* Outer Smooth Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-150 ease-out pointer-events-none ${
          isHovered
            ? "w-11 h-11 scale-125"
            : isClicked
            ? "w-8 h-8 scale-90"
            : "w-8 h-8"
        }`}
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: isHovered ? `${theme.color}20` : isClicked ? `${theme.color}25` : `${theme.color}10`,
          borderColor: isHovered ? theme.color : `${theme.color}60`,
          borderWidth: "1px",
          borderStyle: "solid",
          boxShadow: isHovered ? `0 0 16px ${theme.color}40` : "none",
        }}
      />

      {/* Tiny Precision Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full transition-transform duration-75 ease-out pointer-events-none ${
          isHovered ? "scale-150" : isClicked ? "scale-75" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: theme.primaryHex,
          boxShadow: `0 0 8px ${theme.color}`,
        }}
      />
    </div>
  );
};

export default RippleEffect;
