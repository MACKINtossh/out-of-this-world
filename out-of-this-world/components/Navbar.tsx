import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 ">
        <Link href="/" className="flex justify-center items-center">
          <Image />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-primary-blue text-white px-20 rounded-full mt-10"
        />
      </nav>
    </header>
  );
};

export default Navbar;
