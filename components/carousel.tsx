'use client'

// import React, { useState } from "react";

// const images = [
//   "/image/case_study.png",
//   "/image2.jpg",
//   "/image3.jpg",
//   "/image4.jpg",
// ];

// export function ImageCarouselFold() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-black">
//       {/* Carousel Container */}
//       <div className="relative w-[70vw] h-[40vh] bg-black border-8 border-gray-500 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
//         {/* Images */}
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={`absolute transition-transform duration-1000 ease-in-out ${
//               index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//             style={{
//               maxWidth: "100%",
//               maxHeight: "100%",
//               objectFit: "contain", // Ensures no cropping or distortion
//             }}
//           />
//         ))}

//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300"
//         >
//           &#8249; {/* Left Arrow */}
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300"
//         >
//           &#8250; {/* Right Arrow */}
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-4 flex justify-center w-full space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentIndex ? "bg-white" : "bg-gray-400"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

const images = [
  "/case_study_slides/Slide1.png",
  "/case_study_slides/Slide2.png",
  "/case_study_slides/Slide3.png",
 "/case_study_slides/Slide4.png",
  "/case_study_slides/Slide5.png",
  "/case_study_slides/Slide6.png",
  "/case_study_slides/Slide7.png",
  "/case_study_slides/Slide8.png",
  "/case_study_slides/Slide9.png",
  "/case_study_slides/Slide10.png",
  "/case_study_slides/Slide11.png",
  "/case_study_slides/Slide12.png",
  "/case_study_slides/Slide13.png",
  "/case_study_slides/Slide14.png",
  "/case_study_slides/Slide15.png",
  "/case_study_slides/Slide16.png",
  "/case_study_slides/Slide17.png",
  "/case_study_slides/Slide18.png",
  "/case_study_slides/Slide19.png",
  "/case_study_slides/Slide20.png",
  "/case_study_slides/Slide21.png"
  

];

export function ImageCarouselFold() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-screen bg-black text-white py-48">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-600">
          Some of Our Research
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Explore our breakthroughs in medical imaging and analysis.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full h-[70vh]">
        {/* Images */}
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-1000 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
        >
          &#8249; {/* Left Arrow */}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
        >
          &#8250; {/* Right Arrow */}
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
