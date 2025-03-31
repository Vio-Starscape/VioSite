"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { VioContext } from "@/context/VioContext";
import Navbar from "@/components/Navbar";
import StackMobile from "./Mobile";
import StackDesktop from "./Desktop";
import { useMatomo } from '@datapunt/matomo-tracker-react';

function About() {
  const { VioUser } = useContext(VioContext);
  const { trackPageView } = useMatomo();

  const [isWideScreen, setIsWideScreen] = useState(true); // default to false for SSR
  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    trackPageView();

    const checkWidth = () => {
      setIsWideScreen(window.innerWidth > 770);
    };

    checkWidth(); // run once on mount
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="m-0 z-0">
      <div className="sticky top-0 z-10">
        <Navbar VioUser={VioUser} />
      </div>
      {isWideScreen ? <StackDesktop /> : <StackMobile />}
    </div>
  );
}

export default About;