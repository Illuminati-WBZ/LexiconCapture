"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [sign, notSign] = useState("h");
  return (
    <div className="mt-4 font-openSans flex justify-between sm:justify-around items-center">
      <div className="flex items-center justify-center space-x-3">
        <Image src="/assets/ocr.png" width={40} height={40} alt="brand logo" />
        <span className=" sm:text-xl md:text-2xl hidden sm:inline font-semibold text-[#0abde3]">
          Lexicon<span className="text-orange-400"> Capture</span>
        </span>
      </div>
      {sign === "" ? (
        <button className="px-4 sm:px-6 py-2  rounded-full sm:shadow-md shadow-sm text-sm sm:text-base  bg-orange-400 text-white hover:shadow-sm hover:md:shadow-xl hover:scale-95 hover:bg-cyan-400 transform transition-all ease-out duration-100">
          Sign In
        </button>
      ) : (
        <>
          {/* desktop version */}
          <div className="flex justify-center items-center">
            <Menu>
              <div className="relative">
                <Menu.Button className="w-[35px] h-[35px] items-center mr-[25px] flex justify-center text-xl text-[#34495e] cursor-pointer shadow-lg font-semibold rounded-full ring-2  ring-cyan-400">
                  P
                </Menu.Button>
              </div>
              <div className="relative ">
                <Dropdown open={true} />
              </div>
            </Menu>
            <button className="px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full sm:shadow-md shadow-sm bg-orange-400 text-white hover:shadow-sm hover:md:shadow-xl hover:scale-95 hover:bg-cyan-400 transform transition-all ease-out duration-100">
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
