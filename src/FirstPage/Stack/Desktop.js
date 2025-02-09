import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

import MongoDB from "../../assets/mongodb-ar21.svg";
import Python from "../../assets/python-official.svg";
import OpenCV from "../../assets/opencv-ar21.svg";
import Rust from "../../assets/rust-lang-ar21.svg";
import Docker from "../../assets/docker-ar21.svg";
import ReactJS from "../../assets/reactjs-ar21.svg";
import NodeJS from "../../assets/nodejs-ar21.svg";
import TailwindCSS from "../../assets/tailwindcss-ar21.svg";
import Quart from "../../assets/quart.png";
import RocketRS from "../../assets/box-logo.png";

function StackDesktop() {
    return (
      <section
        className="p-3 relative overflow-hidden z-0 bg-black"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <ArcherContainer strokeColor="white" className="h-full w-full">
          <div className="flex flex-initial flex-wrap gap-4 p-8 h-full w-full border-4 rounded-xl border-dashed border-gray-500">
            <img src={Docker} className="absolute w-48" alt="Docker" />
            <ArcherElement
              id="wrapper"
              relations={[
                {
                  targetId: "VioBot",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                  style: { strokeColor: "Green", strokeWidth: 2 },
                },
                {
                  targetId: "Website",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                  style: { strokeColor: "Green", strokeWidth: 2 },
                },
                {
                  targetId: "API",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                  style: { strokeColor: "Green", strokeWidth: 2 },
                },
              ]}
            >
              <div className="mx-auto h-min">
                <h1 className="font-anta text-7xl text-white text-center">
                  Stack
                </h1>
                <img src={MongoDB} className="m-auto w-48" alt="MongoDB" />
              </div>
            </ArcherElement>
            <div className="flex flex-initial gap-4 p-8 w-full">
              <ArcherElement id="VioBot">
                <div className="w-1/3 border-4 rounded-xl border-dashed border-gray-500">
                  <h1 className="font-anta mt-5 text-5xl text-white text-center">
                    Bot
                  </h1>
                  <img src={Python} className="m-auto w-36" alt="Python" />
                  <img src={OpenCV} className="m-auto w-36" alt="OpenCV" />
                </div>
              </ArcherElement>
              <ArcherElement id="Website">
                <div className="w-1/3 border-4 rounded-xl border-dashed border-gray-500">
                  <h1 className="font-anta mt-5 text-5xl text-white text-center">
                    Website
                  </h1>
                  <div>
                    <img
                      src={Python}
                      className="m-auto w-36 mt-10"
                      alt="Python"
                    />
                    <img src={Quart} className="m-auto w-36 mt-6" alt="Quart" />
                  </div>
                  <div>
                    <img src={NodeJS} className="m-auto w-36" alt="NodeJS" />
                    <img src={ReactJS} className="m-auto w-36" alt="ReactJS" />
                    <img
                      src={TailwindCSS}
                      className="m-auto w-36"
                      alt="TailwindCSS"
                    />
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement id="API">
                <div className="w-1/3 border-4 rounded-xl border-dashed border-gray-500">
                  <h1 className="font-anta mt-5 text-5xl text-white text-center">
                    API
                  </h1>
                  <img src={Rust} className="m-auto w-36" alt="Rust" />
                  <img src={RocketRS} className="m-auto w-36" alt="RocketRS" />
                </div>
              </ArcherElement>
            </div>
          </div>
        </ArcherContainer>
      </section>
    );
  }

export default StackDesktop;