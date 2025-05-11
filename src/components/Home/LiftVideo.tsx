"use client";
import React from "react";

const LiftVideo = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/lift.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white bg-black/40">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Reliable Engineering
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Lifts, generators, substations & more – we build the future with
            precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiftVideo;
