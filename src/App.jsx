import React, { useState } from 'react';
import SplashCurtain from './components/SplashCurtain';
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashCurtain onComplete={() => setShowSplash(false)}  />}

      <main className="min-h-screen bg-white text-black p-10">
        <h1 className="text-4xl font-bold">🏠 Home Page</h1>
        <p>This content is always behind the splash screen.</p>
      </main>
    </>
  );
}

export default App;
