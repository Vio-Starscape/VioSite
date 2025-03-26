import React, { useEffect, useRef, useState, useContext } from "react";
import { VioContext } from "../context";
import Navbar from "./Navbar";
import StackMobile from "./Stack/Mobile";
import StackDesktop from "./Stack/Desktop";
import { useMatomo } from '@datapunt/matomo-tracker-react';

function About() {
  const { VioUser } = useContext(VioContext);
  const { trackPageView } = useMatomo();

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 550);
  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    trackPageView();

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 770);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
