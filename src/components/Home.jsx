import React, { useState } from "react";
import logo from "../images/logo.png";
import Hero_image from "../images/Hero_image.jpg";
import project_17 from "../images/project_17.jpg";
import SplashCurtain from "./SplashCurtain";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Review from "./Review";
import {Link} from 'react-scroll'

export default function Home() {
 
  
  return (
    <main name="home" className=" text-black p-10 ">
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
            <Link to="projects">
              <p className="inline-block bg-red-700 text-white px-6 mt-4 py-3 rounded-lg hover:bg-red-800 transition">
                See our works
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col md:flex-row items-center gap-6 bg-blue-950 p-3">
          <div className="pt-6 bg-blue-950 space-x-2">
            <div className="flex items-center gap-3">
              <div className=" flex w-8 h-0.5 bg-white top-20 font-semibold" />
              <span className="text-white font-semibold">Our Story</span>
            </div>
            <h1 className="text-white text-xl text-justify sm:text-2xl">
              We redefine what's possible.
            </h1>
            <p className="text-white pt-3 text-sm text-left sm:text-xl">
              At Obimba Integrated Services, we bring your vision to life with
              unmatched craftsmanship, integrity, and over a decade of proven
              excellence in commercial and residential building.
            </p>
            <Link to="projects">
              <p className="inline-block bg-red-700 text-white px-6 py-3 mt-4 rounded-lg hover:bg-red-800 transition">
                See our works
              </p>
            </Link>
          </div>
          <div>
            <img src={project_17} />
          </div>
        </div>
      </section>
    </main>
  );
}
