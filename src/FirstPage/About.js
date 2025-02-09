import React, { useEffect, useRef, useState, useContext } from "react";
import { VioContext } from "../context";
import Navbar from "./Navbar";
import { ArcherContainer, ArcherElement } from "react-archer";
import StackMobile from "./Stack/Mobile";
import StackDesktop from "./Stack/Desktop";

function About() {
  const { VioUser } = useContext(VioContext);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 550);
  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
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
      {/* <section
        className="p-3 relative overflow-hidden z-0 bg-black"
        style={{ height: "calc(300vh - 12rem)" }}
      >
        <div>
          <h1 className="font-anta text-7xl text-white text-center">History</h1>
          <div className="p-10">
            <div
              ref={boxRefs[0]}
              className="box absolute w-[400px] aspect-square border-4 rounded-xl border-gray-500"
            >
              History
            </div>
            <div
              ref={boxRefs[1]}
              className="box absolute top-1/3 w-[400px] aspect-square border-4 rounded-xl border-gray-500"
            ></div>
            <div
              ref={boxRefs[2]}
              className="box absolute top-2/3 w-[400px] aspect-square border-4 rounded-xl border-gray-500"
            ></div>
          </div>
        </div>
      </section> */}
      {isWideScreen ? <StackDesktop /> : <StackMobile />}
    </div>
  );
}
export default About;
