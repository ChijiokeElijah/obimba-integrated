import { useState, useEffect } from 'react';
import Home from './pages/Home';
import HomeReveal from './components/HomeReveal';

export default function App() {
  const [stage, setStage] = useState('intro'); // 'intro' → 'home'

  useEffect(() => {
    const totalRevealDuration = 6000; // splash + lines
    const timer = setTimeout(() => setStage('home'), totalRevealDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {stage === 'intro' ? <HomeReveal /> : <Home />}
    </div>
  );
}
