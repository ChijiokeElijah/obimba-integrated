import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
const Projects = lazy(() => import("./components/Projects"));
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Review from "./components/Review";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SplashCurtain from "./components/SplashCurtain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import SplashScreen from "./components/SplashScreen";

function App() {
  // const [showSplash, setShowSplash] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </>
  );
}

export default App;
