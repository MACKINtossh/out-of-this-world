"use client";

import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-black min-h-screen text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
            Out of This World
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            Space : The Timeless Infinity
          </h2>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Explore the next fronteir on the wings of science and approach your wildest dreams at the spped of light.
          </p>
          <a
            href="#"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Explore Now
          </a>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              <img
                className="inline-block mt-28 hidden xl:block"
                src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
              />
            </div>
            <div>
              <img
                className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
              />
            </div>
            <div>
              <img
                className="inline-block mt-28 hidden lg:block"
                src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");

//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div classNameName="min-h-screen w-full flex flex-col">
//       <div classNameName="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../public/ships/ship-4.png')]" />

//     </div>
//   );
// };

// export default Hero;
