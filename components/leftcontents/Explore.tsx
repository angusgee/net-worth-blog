import React from "react";
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
    <div>
      {topCelebs.map((celeb) => (
        <div>{celeb.name}</div>
      ))}
    </div>
  );
};

export default Explore;
