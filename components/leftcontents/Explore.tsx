import React from "react";
import Image from "next/image";
import SnoopDogg from "../../public/assets/Snoop-Dogg.jpg";
import ChrisWilliamson from "../../public/assets/Chris-Williamson.jpg";
import VenusWilliams from "../../public/assets/Venus-Williams.jpg";
import MapImg from "../../public/assets/world-map.jpg";

const Explore = () => {
  const topCelebs = [
    {
      name: "Snoop Dogg",
      image: SnoopDogg,
      netWorth: "$20 million",
      map: MapImg,
    },
    {
      name: "Chris Williamson",
      image: ChrisWilliamson,
      netWorth: "$5 million",
      map: MapImg,
    },
    {
      name: "Venus Williams",
      image: VenusWilliams,
      netWorth: "$35 million",
      map: MapImg,
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-x-2 lg:gap-x-10 md:gap-x-4 mx-auto">
      {topCelebs.map((celeb) => (
        <div
          key={celeb.name}
          className="bg-[#1c252a] text-white flex flex-col items-center pb-2"
        >
          <Image
            src={celeb.image}
            alt="celebrity headshot"
            className="w-28 md:w-40 h-20 md:h-40 object-cover object-top"
          />
          <Image
            src={MapImg}
            alt="map of the world"
            className="w-28 md:w-40 h-20 md:h-28 brightness-80 grayscale object-cover object-center"
          />
          <p className="text-[12px] font-semibold">{celeb.name}</p>
          <p className="text-[12px] text-[#e581e5]">{celeb.netWorth}</p>
          <button className="w-34 md:w-32 text-[10px] bg-transparent text-white uppercase mt-2 px-4 py-2 border border-[#fff]">
            Read Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Explore;
