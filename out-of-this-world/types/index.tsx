import { MouseEventHandler } from "react";

// The props within this types folder are mainly for major components.
// The props for the items HELD WITHIN these components are located in the config file

export interface CustomButtonProps {
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export interface PlanetProps {
  id: string;
  name: string;
  image: string;
  distance: number;
  description: string;
  transportMethod: string;
}
// export interface PlanetCardProps {
//   id: string;
//   title: string;
//   description?: string;
// }

export interface TransportDetails {
  id: string;
  title: string;
  maxSpeed: string;
  description: string;
}
