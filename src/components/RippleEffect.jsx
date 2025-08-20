// import React, { useState, useEffect } from "react";

// const RippleEffect = () => {
//   const [ripples, setRipples] = useState([]);

//   const addRipple = (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     const newRipple = {
//       id: Date.now(),
//       x,
//       y,
//     };
//     setRipples((prev) => [...prev, newRipple]);

//     // Remove ripple after animation
//     setTimeout(() => {
//       setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
//     }, 1200);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", addRipple);
//     return () => window.removeEventListener("mousemove", addRipple);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
//       {ripples.map((ripple) => (
//         <span
//           key={ripple.id}
//           style={{
//             left: ripple.x,
//             top: ripple.y,
//           }}
//           className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-70 animate-ripple"
//         ></span>
//       ))}

//       <style jsx>{`
//         .animate-ripple {
//           animation: ripple-animation 1.2s ease-out forwards;
//         }

//         @keyframes ripple-animation {
//           0% {
//             transform: scale(0.2);
//             opacity: 0.8;
//             filter: blur(1px);
//           }
//           50% {
//             transform: scale(2);
//             opacity: 0.4;
//             filter: blur(3px);
//           }
//           100% {
//             transform: scale(3.5);
//             opacity: 0;
//             filter: blur(6px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RippleEffect;


import React, { useState, useEffect } from "react";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", addRipple);
    return () => window.removeEventListener("mousemove", addRipple);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          className="absolute w-16 h-16 rounded-full animate-ripple bg-white/30"
        ></span>
      ))}

      <style jsx>{`
        .animate-ripple {
          animation: ripple-animation 1s ease-out forwards;
        }

        @keyframes ripple-animation {
          0% {
            transform: scale(0.3);
            opacity: 0.3;
            filter: blur(2px);
          }
          50% {
            transform: scale(1.8);
            opacity: 0.15;
            filter: blur(4px);
          }
          100% {
            transform: scale(3);
            opacity: 0;
            filter: blur(6px);
          }
        }
      `}</style>
    </div>
  );
};

export default RippleEffect;
