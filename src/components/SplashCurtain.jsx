import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'

const SplashCurtain = ({ onComplete }) => {
  const [phase, setPhase] = useState('welcome');

  useEffect(() => {
    const timers = [];

    // Fade out welcome and show lines immediately
    timers.push(setTimeout(() => setPhase('slide'), 3300));

    // Finish after slide
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 3500)); // 1.5s slide duration

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white pointer-events-none">
      {/* Welcome message with fade-out */}
      {(phase === "welcome" || phase === "slide") && (
        <div
          className={`absolute inset-0 bg-blue-950 flex flex-col items-center justify-center transition-opacity duration-500 ${
            phase === "slide" ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src={logo} className="h-50 w-50" />
          <h1
            className={`text-xl text-center font-bold transition-all duration-500 ${
              phase === "slide" ? "scale-90 blur-sm" : "scale-100"
            }`}
          >
            OBIMBA INTREGRATED SERVICES
          </h1>
        </div>
      )}

      {/* Curtain lines immediately sliding left */}
      {phase === "slide" && (
        <div className="absolute inset-0 flex justify-between px-[2%]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white h-full"
              style={{
                width: "12%",
                transform: "translateX(-100%)",
                transition: "transform 5.5s ease-in-out",
                transitionDelay: `${i * 250}ms`, // optional stagger
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SplashCurtain;
