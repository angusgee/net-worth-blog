import React from "react";
import BgImg from "../public/assets/bg-img.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgImg}
          alt="background image"
          fill
          className="object-cover object-center brightness-50"
        />
      </div>
      <div className="flex justify-end h-[66%] items-center">
        <div className="flex flex-col mt-10 w-[50vw]">
          <h1 className="text-white text-[32px] md:text-[48px] font-semibold">
            Stay in the Loop
          </h1>
          <h2 className="text-white  text-[16px] md:text-[24px] font-semibold">
            Get the hottest celebrity news
          </h2>
          <div className="flex pt-6 md:pt-8">
            <button className="text-white uppercase bg-gradient-to-r from-transparent to-[#8457c8] w-34 md:w-38 text-[12px] md:text-base hover:bg-[#e581e5] font-semibold py-2 px-4 border border-white hover:border-transparent">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
