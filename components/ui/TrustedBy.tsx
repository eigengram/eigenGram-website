"use client";
import React from "react";

export function IncubatedAndTrustedFolds() {
  return (
    <div>
      {/* Incubated At Fold */}
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Incubated at</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            {/* Incubated Partners */}
            <div className="p-4 bg-black rounded-lg shadow-md">
              <p className="text-lg font-medium">Mazumdar Shaw Medical Foundation</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-md">
              <p className="text-lg font-medium">Nasscom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Fold */}
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Trusted Partners */}
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">AIIMS</p>
              <p className="text-sm text-blue-200">
                (All India Institute of Medical Sciences)
              </p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">Maulana Azad Medical College</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">Lady Hardinge Medical College</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">Safdarjung & VMMC</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">Gautam Buddha University</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">PGI Rohtak</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">East Ocyon</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">Cankids</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-lg font-medium">BCCI Level 2 Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
