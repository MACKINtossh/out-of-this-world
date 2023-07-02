"use client";

import { planetProps } from "@config/planets";
import React from "react";
import PlanetCard from "./ui/PlanetCard";
import Image from "next/image";

type Props = {};

const Discover = (props: Props) => {
  return (
    <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
      {/* MAIN CONTENT */}
      <div className="flex-1 px-2 sm:px-0">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extralight text-white/50">
            Current Destinations
          </h3>
          <div className="inline-flex items-center space-x-2">
            <a
              href="#"
              className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            >
              <Image src={""} alt="" className="h-6 w-6" />
            </a>
            <a>
              <Image src={""} alt="" className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* HEADER END */}

        {/* CARD GRID */}
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gridcols-4">
          {planetProps.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))}
        </div>
        {/* CARD GRID END */}
      </div>

      {/* <div className="px-36 py-36 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-5 h-full gap-x-6 gap-y-10">
          {planetProps.map((planet) => (
            <PlanetCard planet={planet} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Discover;
