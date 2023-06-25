"use client";
import Image from "next/image";
import ship2 from "../public/ships/ship-2.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-3 bg-black">
      {/* LEFT */}
      <div className="col-span-1 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl text-white font-semibold">
          Where are you headed?
        </h1>

        <p className="text-white">
          Streamline your space travel experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Destinations"
          containerStyles="bg-primary-blue text-white px-20 rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      {/* RIGHT */}
      <div className="col-span-2 w-full min-h-screen bg-right bg-no-repeat bg-[url('../public/ships/ship-1.png')]">
        {/* <div className="mx-30 right-0 w-1/4 h-full backdrop-brightness-50"></div> */}
      </div>
    </div>
  );
};

export default Hero;
