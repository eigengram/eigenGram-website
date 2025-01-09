import React from "react";

export function ImageFold2() {
  return (
    <div
      className="relative flex items-center justify-center w-full bg-black overflow-hidden"
      style={{ height: "1600px" }} // Original height of the image
    >
      <img
        src="/where_working_black_blue_2563eb.png"
        alt="Background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-full object-contain"
      />
      {/* Optional Content */}
      <div className="relative z-10 text-center text-white">
        {/* <h1 className="text-4xl md:text-6xl font-bold">Your Content Here</h1> */}
      </div>
    </div>
  );
}
