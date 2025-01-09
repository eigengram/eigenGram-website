import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision2";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-customBlack">
      {/* Beams Component */}
      <BackgroundBeamsWithCollision>
        {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight">
          <span className="text-blue-600">We are striving to make </span>
          <span className="text-white">NO DISEASE</span>{" "}
          <br></br>
          <span className="text-blue-600">remain Untreated</span>
        </h2> */}
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight">
          <span className="text-white">We are striving to make </span>
          <span className="text-[#4169E1]">NO DISEASE</span>{" "}
          <br></br>
          <span className="text-white">remain </span>
           < span className="text-white">Untreated</span>
        </h2>
      </BackgroundBeamsWithCollision>

      {/* Gradient Overlay for Smooth Transition */}
      {/* <div
        className="absolute bottom-0 w-full h-24"
        style={{
          background: "linear-gradient(to bottom, transparent,#000602)",
        }}
      /> */}
      
    </div>
  );
}
