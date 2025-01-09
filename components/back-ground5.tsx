import React from "react";

export function ImageFold5() {
  return (
    
    <div
      className="relative flex items-center justify-center min-h-screen  bg-center mt-64 mb-64"
      style={{
        backgroundImage: "url('/banner_full_slide_blue_less_width_2563eb.png')",
      }}
    >


      {/* Overlay (optional, if you want text on top of the image) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white"
        style={{ fontSize: "100px" }}>
         Lets Join hands together to make world a better place 
        </h2>
        <br></br>
        <h1 className="text-6xl md:text-10xl font-bold text-white"
        style={{ fontSize: "120px" }}>
        
        </h1>
        
        
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          {/* Empowering technology for a healthier tomorrow */}
        </p>
      </div>
    </div>
  );
}
