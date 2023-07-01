import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { PlanetProps } from "@types";
import React from "react";
import Image from "next/image";

interface PlanetDetailsProps {
  isSelected: boolean;
  toggle: () => void;
  planet: PlanetProps;
}

const PlanetDetails = ({ isSelected, toggle, planet }: PlanetDetailsProps) => (
  <div className="relative mx-auto w-full max-w-sm pt-6">
    <a
      href="#"
      className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
    >
      {/* CARD */}
      <div className="rounded-lg">
        {/* CARD IMAGE */}
        <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
          <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
            <Image src={""} alt="" className="" />
          </div>

          {/* IMAGE ICONS */}
          <div className="absolute bottom-0 mb-3 flex justify-center">
            <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
              <p className="flex items-center font-medium text-gray-500">
                <Image src={""} alt="" className="mr-2 h-5 w-5 fill-current" />
              </p>
              <p className="flex items-center font-medium text-gray-500">
                <Image src={""} alt="" className="mr-2 h-5 w-5 fill-current" />
              </p>
              <p className="flex items-center font-medium text-gray-500">
                <Image src={""} alt="" className="mr-2 h-5 w-5 fill-current" />
              </p>
            </div>
          </div>
          {/* IMAGE ICONS END */}

          {/* DEPARTURE COUNTDOWN */}
          <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
            Departing Soon
          </span>
          {/* DEPARTURE COUNTDOWN END */}
        </div>
        {/* CARD IMAGE END */}

        {/* CARD DETAILS */}
        <div>
          {/* DETAILS SECTION 1 */}
          <div className="mt-4 grid grid-cols-2">
            <div className="flex items-center">
              <div className="relative">
                <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg">
                  Planet Name
                </h2>
                <p
                  className="mt-2 line-clamp-1 text-sm text-gray-800"
                  title="Planet Location"
                >
                  Planet Location
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                <span className="text-sm uppercase"></span>
                <span className="text-lg"></span>km
              </p>
            </div>
          </div>
          {/* DETAILS SECTION 1 END */}

          {/* DETAILS SECTION 2 */}
          <div className="mt-2 border-t border-gray-200 pt-3">
            Long Description
          </div>

          <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
              <Image
                src={""}
                alt=""
                className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
              />
              <span className="xl:mt-0">ICON</span>
            </p>
            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
              <Image
                src={""}
                alt=""
                className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
              />
              <span className="xl:mt-0">ICON</span>
            </p>
            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
              <Image
                src={""}
                alt=""
                className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
              />
              <span className="xl:mt-0">ICON</span>
            </p>
            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
              <Image
                src={""}
                alt=""
                className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
              />
              <span className="xl:mt-0">ICON</span>
            </p>
            <button onClick={toggle}>close</button>
          </div>
          {/* DETAILS SECTION 2 END */}
        </div>
        {/* CARD DETAILS END */}
      </div>
    </a>
  </div>
);

export default PlanetDetails;
