"use client";

import { CustomButtonProps } from "@types";
import AnimatedText from "./styled/AnimatedText";
import DynamicAnimation from "./styled/DynamicAnimation";

const CustomButton = ({ text, handleClick }: CustomButtonProps) => {
  return <DynamicAnimation text={text} />;
};

export default CustomButton;
