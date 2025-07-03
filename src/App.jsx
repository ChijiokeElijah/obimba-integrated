import React, { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Review from "./components/Review";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SplashCurtain from "./components/SplashCurtain";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashCurtain onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <NavBar />
          <Home />
          <AboutSection />
          <Projects />
          <Review />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
