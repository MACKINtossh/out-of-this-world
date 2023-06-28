
import React from "react";
import CustomButton from "./CustomButton";
import AnimatedText from "./styled/AnimatedText";

const Navbar = () => {
  return (
    <div className="w-full grid grid-cols-4 absolute py-10 z-10">
      <div className="col-span-2">
        <AnimatedText text="Travel Like Never Before" className="text-white/70 rounded-lg" />
        {/* <AnimatedText text="Never Before" /> */}
      </div>

      <div className="col-span-2 flex items-center justify-center ">
        <div>
          <CustomButton text="Launch With Us" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
