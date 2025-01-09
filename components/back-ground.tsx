import React from "react";

export function ImageFold() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen  bg-center"
      style={{
        backgroundImage: "url('/health_co_pilot_in_blue_2563eb.png')",
      }}
    >
      {/* Overlay (optional, if you want text on top of the image) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-10xl font-bold text-white"
        style={{ fontSize: "120px" }}>
         A Healthcare 
        </h1>
        <br></br>
        <h1 className="text-6xl md:text-10xl font-bold text-white"
        style={{ fontSize: "120px" }}>
        AI Co-pilot
        </h1>
        
        
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          {/* Empowering technology for a healthier tomorrow */}
        </p>
      </div>
    </div>
  );
}
