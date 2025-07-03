import React from 'react'
import logo from '../images/logo.png'

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white animate-fadeOut">
      <img src={logo} alt="Logo" className="w-32 h-32 animate-scaleUp" />
      <p className="mt-4 text-xl tracking-wide animate-fadeIn delay-300">
        Building the future with elegance.
      </p>
    </div>
  );
}
