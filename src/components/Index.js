"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { VioContext } from "@/context/VioContext";
import Navbar from "@/components/Navbar";

const metadata = {
  title: 'Your Page Title',
  description: 'A brief description of your page content.',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG Description',
    url: 'https://yourwebsite.com/page',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourwebsite.com/path/to/image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image description',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function Index() {
  const containerRef = useRef(null);
  const [options, setOptions] = useState(getParticleOptions());
  const { trackPageView } = useMatomo();
  const { VioUser, loading } = useContext(VioContext);

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
        <Navbar />
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black flex items-center justify-center">
          {!loading && (
            <h1 className="text-white text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-anta shadow-lg z-10">
              {!VioUser ? "Level Up with Vio" : `Welcome, ${VioUser.user.username}`}
            </h1>
          )}
          <Particles
            className="z-0"
            id="tsparticles"
            container={containerRef.current}
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      </section>
    </div>
  );
}

function getParticleOptions() {
  if (typeof window === "undefined") {
    // Return default options for SSR
    return {
      particles: {
        number: {
          value: 50, // Default value for SSR
        },
        color: {
          value: ["#ca2020", "#20cb20", "#1a64a3", "#cb6c21", "#a821cb"],
        },
        size: {
          value: 5,
          random: { enable: true, minimumValue: 0.5 },
        },
        links: {
          enable: true,
          distance: 100, // Default value for SSR
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
        },
      },
    };
  }

  // Client-side options
  return {
    particles: {
      number: {
        value: Math.floor(window.innerWidth / 10),
      },
      color: {
        value: ["#ca2020", "#20cb20", "#1a64a3", "#cb6c21", "#a821cb"],
      },
      size: {
        value: 5,
        random: { enable: true, minimumValue: 0.5 },
      },
      links: {
        enable: true,
        distance: Math.floor(Math.log(window.innerWidth) * 20),
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
      },
    },
  };
}

export default Index;