"use client";
import { useState } from "react";
import Image from "next/image";
import ship4 from "../../public/ships/ship-4.png";
import { PlanetDetailsProps } from "@types";

interface PlanetCardProps {
  planet: PlanetDetailsProps;
}

const PlanetCard = ({ planet }: PlanetCardProps) => {
  const { id, name, distance, description, transportMethod } = planet;

  const [isSelected, setIsSelected] = useState(false);


  return (
    <div className="group relative cursor-pointer rounded-lg items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <Image
          src={ship4}
          alt="ship4"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>

   
  );
};

export default PlanetCard;
