import { useEffect, useState } from 'react';
import logo from '../images/logo.png'

export default function SplashAndLines() {
  const [fadeSplash, setFadeSplash] = useState(false);
  const lines = 10;

  useEffect(() => {
    // Fade out splash text after lines have mostly appeared
    const timer = setTimeout(() => setFadeSplash(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash Text */}
      <div className="fixed inset-0 bg-green-950 text-white flex items-center justify-center text-4xl font-bold animate-fade-in-out z-50">
            <div className='flex flex-col items-center justify-center'>
                <img src={logo} className='h-50 w-50'/>
                <h1 className='font-mono'>OBIMBA INTREGRATED SERVICES</h1> 
          </div> 
     </div>
      {/* Vertical Lines */}
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 bg-black z-30"
          style={{
            width: `${100 / lines}%`,
            height: '100%',
            left: `${(100 / lines) * i}%`,
            animation: `slideUp 2.5s ease-out forwards`,
            animationDelay: `${i * 200}ms`,
          }}
        />
      ))}
    </>
  );
}
