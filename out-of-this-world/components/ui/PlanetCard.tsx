"use client";
import { useState } from "react";
import { PlanetProps } from "@types";
import { useMotionValue } from "framer-motion";
import Image from "next/image";
import PlanetDetails from "./PlanetDetails";
import CustomButton from "@components/CustomButton";

interface PlanetCardProps {
  planet: PlanetProps;
}

const PlanetCard = ({ planet }: PlanetCardProps) => {
  const { id, title, distance, description, transportMethod } = planet;

  const [isSelected, setIsSelected] = useState(false);

  // const ETA = calculateEta()

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title}</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {distance}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      {/* <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={`images/${id}.jpg`}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
        <p>{description}</p>
        <p>{transportMethod}</p>
      </div> */}

      <div className="relative flex w-full mt-2">
        {/* <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] leading-[17px]">{`images/${id}.jpg`}</p>
          </div>
          <div className="car-card__icon">
            <Image src="" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{`images/${id}.jpg`}</p>
          </div>
          <div className="car-card__icon">
            <Image src="" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{`images/${id}.jpg`} MPG</p>
          </div>
        </div> */}

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsSelected(true)}
          />
        </div>
      </div>

      <PlanetDetails
        isSelected={isSelected}
        closeModal={() => setIsSelected(false)}
        planet={planet}
      />
    </div>
  );
};

export default PlanetCard;