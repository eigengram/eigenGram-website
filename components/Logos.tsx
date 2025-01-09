
import React from "react";

const partners = [
  { name: "Chupa Chups", logo: "/logo-background.svg" },
  { name: "Prime Video", logo: "/image/aiims_logo.png" },
  // { name: "Huggies", logo: "/logos/huggies.png" },
  // { name: "Tata", logo: "/logos/tata.png" },
  // { name: "Justice League", logo: "/logos/justice-league.png" },
  // { name: "Alpenliebe", logo: "/logos/alpenliebe.png" },
  // { name: "ITC", logo: "/logos/itc.png" },
  // { name: "Perfetti Van Melle", logo: "/logos/perfetti.png" },
  // { name: "Wavemaker", logo: "/logos/wavemaker.png" },
  // { name: "Mother Dairy", logo: "/logos/mother-dairy.png" },
  // { name: "Crax", logo: "/logos/crax.png" },
  // { name: "Kimberly Clark", logo: "/logos/kimberly-clark.png" },
  // { name: "The Boys", logo: "/logos/the-boys.png" },
  // { name: "Minions", logo: "/logos/minions.png" },
  // { name: "Royal Stag", logo: "/logos/royal-stag.png" },
  // { name: "Center Fruit", logo: "/logos/center-fruit.png" },
  // { name: "Kissan", logo: "/logos/kissan.png" },
  // { name: "Discovery Kids", logo: "/logos/discovery-kids.png" },
  // { name: "Hindustan Unilever", logo: "/logos/hindustan-unilever.png" },
  // { name: "Little Singham", logo: "/logos/little-singham.png" },
  // { name: "Jelimals", logo: "/logos/jelimals.png" },
  // { name: "Natural Diamond", logo: "/logos/natural-diamond.png" },
  // { name: "Evara", logo: "/logos/evara.png" },
];

export default function TrustedPartners() {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Proudly Trusted By...</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          {/* <p className="text-gray-500 text-sm">&copy; 2023 Your Company Name - All Rights Reserved</p> */}
        </div>
      </div>
    </section>
  );
}
