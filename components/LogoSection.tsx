import React from "react";

export function EigengramFold() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black">
      {/* Main Text */}
      <h1
        className="font-bold text-white text-center"
        style={{
          fontSize: "9vw", // Font size remains dynamic to the viewport
          width: "100%",   // Full width for perfect alignment
          letterSpacing: "0.2em", // Increase letter spacing for a wider look
          lineHeight: "1", // Compact height for the text
        }}
      >
        EIGENGRAM
      </h1>

      {/* Sub Text */}
      <h2
        className="text-center"
        style={{
          fontSize: "3vw", // Dynamic font size for responsiveness
          color: "#4169E1", // Royal blue color
          width: "100%",   // Align with the main text width
          marginTop: "1rem", // Spacing below the main text
          letterSpacing: "0.05em", // Subtle spacing for cleaner appearance
        }}
      >
        Creating Technology to Solve Diseases
      </h2>
    </div>
  );
}
