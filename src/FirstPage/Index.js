import React, { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Helmet from "react-helmet";
import { loadFull } from "tsparticles";
import './index.css';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Navbar from "./Navbar";

function Index({ VioUser }) {
  const containerRef = useRef(null);
  const [options, setOptions]= useState(getParticleOptions());
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView();

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });

    const handleResize = () => {
      setOptions(getParticleOptions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesLoaded = (container) => {
    containerRef.current = container;
  };

  return (
    <div className="m-0 z-0">
      <section className="h-screen relative overflow-hidden z-0">
        <Navbar className="z-10" VioUser={VioUser} />
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black flex items-center justify-center">
            <h1 className="text-white text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-anta shadow-lg z-10">
              {!VioUser ? "Level Up with Vio" : `Welcome, ${VioUser.user.username}`}
            </h1>
          <Particles
            className="z-0"
            id="tsparticles"
            container={containerRef.current}
            particlesLoaded={particlesLoaded}
            options={options} 
          />
        </div>
      </section>
      {/* <section className="h-screen relative overflow-hidden bg-gray-600" id="about">
        <div className="absolute top-20 left-0 w-full h-full">
          <h1 className="text-center font-anta text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Who are we?</h1>
          <p className="text-center font-mono text-base sm:text-3xl lg:text-4xl xl:text-5xl p-10">
            Vio is a company focused on development of starscape market technologies.
            We develop and provide the tools and resources to help you succeed in the market 
            without needing to be online 24/7. You can use our tools to help you make the best decisions for your market
            and to check how much you've grown.
          </p>
        </div>
      </section>
      <section className="h-screen relative overflow-hidden bg-gray-400" id="history">
        <div className="absolute top-20 left-0 w-full h-full">
          <h1 className="text-center font-anta text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Our History</h1>
          <p className="text-center font-mono text-base sm:text-3xl lg:text-4xl xl:text-5xl p-10">
            Vio was created May 2022 by Meaning. <br></br>Before Vio, Meaning was one of the main developers for
            Aurellia Industries and the Creator of KIWI Financial. After the fall of Aurellia Industries,
            Meaning wanted to continue the legacy of Black Sheep's Market Technologies and thus Vio was born.
            Initially, Vio used a script injector to scrape the market, but once byfron was released decided to shut down.
            Once Keth came back and the Community started thriving again, Vio was relaunched using OCR instead.  
          </p>
        </div>
      </section> */}
      {/* <section className="h-screen relative overflow-hidden bg-gray-600" id="projects">
        <div className="absolute top-20 left-0 w-full h-full">
          <h1 className="text-center font-anta text-6xl md:text-7xl lg:text-8xl">Our Projects</h1>
        </div>
      </section> */}
    </div>
  );
}

function getParticleOptions() {
  return {
    particles: {
      number: {
        value: Math.floor(window.innerWidth / 10),  // Adjust particle count
      },
      color: {
        value: ["#ca2020", "#20cb20", "#1a64a3", "#cb6c21", "#a821cb"],
      },
      size: {
        value: 5,  // Make particles smaller
        random: { enable: true, minimumValue: 0.5 },  // Randomize particle size
      },
      links: {
        enable: true,
        distance: Math.floor(Math.log(window.innerWidth) * 20),  // Adjust particle link distance
      },
      move: {
        enable: true,
        speed: 1,  // Make particles move slower
        direction: "none",  // Particles move in random directions
        random: true,  // Randomize particle movement
      }
    },
  }; 
}

export default Index;