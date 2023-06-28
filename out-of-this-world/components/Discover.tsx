"use client";

import { planetProps } from "@config/planets";
import React from "react";
import PlanetCard from "./ui/PlanetCard";

type Props = {};

const Discover = (props: Props) => {
  return (
    // <div className="w-full h-auto pt-12">
    //   <header className="border-b-stone-200 border-solid border-b-2">
    //     <span className="text-stone-200 text-sm uppercase">
    //       Tuesday, June 26th{" "}
    //     </span>
    //     <h1 className="text-bold text-white text-xl mt-2 mb-3">Today</h1>
    //   </header>

    //   <ul>
    //     {planetProps.map((planet) => (
    //       <PlanetCard planet={planet} />
    //     ))}
    //   </ul>
    // </div>
    <div className="px-36 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-5 h-full gap-x-6 gap-y-10">
        {planetProps.map((planet) => (
          <PlanetCard planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
