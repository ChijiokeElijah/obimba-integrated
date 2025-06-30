import React, { useState } from "react";
import SplashCurtain from "./components/SplashCurtain";
import "./App.css";
import logo from "../src/images/logo.png";
import Hero_image from "../src/images/Hero_image.jpg";
import project_17 from "../src/images/project_17.jpg";
import project_22 from "../src/images/project_22.jpg";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {showSplash && <SplashCurtain onComplete={() => setShowSplash(false)} />}

      <main className=" text-black p-10 bg-gray">
        <nav className="bg-transparent shadow-md fixed top-0 left-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="text-xl font-bold text-blue-600">
                  <img src={logo} alt="logo" className="h-15 w-15" />
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  About
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Services
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Contact
                </a>
              </div>

              {/* Hamburger Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Projects
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          )}
        </nav>
        {/* HERO SECTION */}
        <section className="relative min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={Hero_image}
            alt="Hero"
            className="w-full h-full  object-cover absolute inset-0 min-h-screen"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Building the Future, Today
              </h1>
              <h2 className="mt-4 text-white text-lg md:text-xl text-bold">
                Obimba Integrated Services: Functionality. Safety. Aesthetics.
                Sustainability.
              </h2>
              <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg">
                See our works
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex flex-col lg:flex-row items-center gap-6 bg-blue-950 p-3">
            <div className="pt-6 bg-blue-950 space-x-2">
              <div className="flex items-center gap-3">
                <div className=" flex w-8 h-0.5 bg-white top-20 font-semibold" />
                <span className="text-white font-semibold">Our Story</span>
              </div>
              <h1 className="text-white text-xl text-justify">
                We redefine what's possible
              </h1>
              <p className="text-white pt-3 text-sm text-left">
                At Obimba Integrated Services, we bring your vision to life with
                unmatched craftsmanship, integrity, and over a decade of proven
                excellence in commercial and residential building.
              </p>
              <button className="h-12 bg-red-900 p-3 text-white rounded-md hover:bg-red-600 mt-3">
                See our work
              </button>
            </div>
            <div>
              <img src={project_17} />
            </div>
          </div>
        </section>
        <section className="min-h-screen flex-1 overflow-y-auto">
          <Projects />
          <ContactForm />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
