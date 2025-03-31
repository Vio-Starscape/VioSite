"use client";

import React from "react";


function StackMobile() {
  return (
    <section className="p-3 relative overflow-hidden z-0 bg-black">
      <div className="flex flex-initial flex-wrap gap-4 p-4 h-full w-full border-4 rounded-xl border-dashed border-gray-500">
        <div className="mx-auto h-min">
          <h1 className="font-anta text-7xl text-white text-center">Stack</h1>
          <img src="/assets/docker-ar21.svg" className="m-auto w-48" alt="Docker" />
          <img src="/assets/mongodb-ar21.svg" className="m-auto w-48" alt="MongoDB" />
        </div>
        <div className="flex flex-wrap gap-4 p-4 w-full overflow-y-scroll">
          <div className="w-full p-2 border-4 rounded-xl border-dashed border-gray-500">
            <h1 className="font-anta mt-5 text-5xl text-white text-center">
              Bot
            </h1>
            <img src="/assets/python-official.svg" className="m-auto w-36" alt="Python" />
            <img src="/assets/opencv-ar21.svg" className="m-auto w-36" alt="OpenCV" />
          </div>
          <div className="w-full p-2 border-4 rounded-xl border-dashed border-gray-500">
            <h1 className="font-anta mt-5 text-5xl text-white text-center">
              Website
            </h1>
            <div>
              <img src="/assets/python-official.svg" className="m-auto w-36 mt-10" alt="Python" />
              <img src="/assets/quart.png" className="m-auto w-36 mt-6" alt="Quart" />
            </div>
            <div>
              <img src="/assets/nodejs-ar21.svg" className="m-auto w-36" alt="NodeJS" />
              <img src="/assets/reactjs-ar21.svg" className="m-auto w-36" alt="ReactJS" />
              <img
                src="/assets/tailwindcss-ar21.svg"
                className="m-auto w-36"
                alt="TailwindCSS"
              />
            </div>
          </div>
          <div className="w-full p-2 border-4 rounded-xl border-dashed border-gray-500">
            <h1 className="font-anta mt-5 text-5xl text-white text-center">
              API
            </h1>
            <img src="/assets/rust-lang-ar21.svg" className="m-auto w-36" alt="Rust" />
            <img src="/assets/box-logo.png" className="m-auto w-36" alt="RocketRS" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackMobile;