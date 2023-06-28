"use client";

import { planetProps } from "@config/planets";
import React from "react";
import PlanetCard from "./ui/PlanetCard";

type Props = {};

const Discover = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <h1 className="text-white">Currently Scheduled Flights</h1>
        <p>current date</p>
      </header>
      <div className="px-36 py-36 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-5 h-full gap-x-6 gap-y-10">
          {planetProps.map((planet) => (
            <PlanetCard planet={planet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
