import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center gap-8 mb-64">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 text-center p-8">
        Redefining Healthcare using AI into a better world
      </h1>

      {/* Comparison Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
        {/* Left Text Block */}
        <div className="w-full md:w-1/4 bg-black p-4 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-blue-600">The Present</h1>
          <p className="text-lg text-gray-300 mt-4">
            Struggling with inefficiencies, inaccuracy and longer gestation period
          </p>
        </div>

        {/* Compare Component */}
        <div className="w-full md:w-2/4 flex justify-center">
          <div className="relative p-1 bg-gradient-to-r from-white to-blue-600 rounded-lg">
            <div className="bg-black p-4 rounded-lg shadow-lg">
              <Compare
                firstImage="/image/hospital.png"
                secondImage="/image/varun_forest_sun.jpg"
                firstImageClassName="object-cover object-center"
                className="h-[250px] w-[200px] md:h-[600px] md:w-[600px] rounded-md"
                slideMode="hover"
                autoplay={true}
              />
            </div>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="w-full md:w-1/4 bg-black p-4 rounded-lg shadow-lg flex flex-col justify-center pl-8">
          <h1 className="text-3xl font-extrabold text-blue-600">The Future</h1>
          <p className="text-lg text-gray-300 mt-4">
            More Precise and faster discoveries
          </p>
        </div>
      </div>
    </div>
  );
}
