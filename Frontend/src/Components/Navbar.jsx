import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import RegPopUp from "./RegPopUp";

const Navbar = () => {
  return (
    <>
      {/* PopUps */}
      <RegPopUp />
      {/* Navbar Navigations */}
      <div className="container mx-auto p-4 flex justify-between items-center">
        <img src="/svgs/logo.svg" alt="Logo" />
        <ul className="flex gap-1 unstyled items-center">
          <li className="font-bold text-[18px] py-2 px-4  hover:bg-[#F5F5F5] hover:rounded-lg flex items-center gap-2">
            FIverr Pro <FaChevronDown size={14} className="font-normal" />
          </li>
          <li className="text-[#707278] font-bold text-[15px] py-2 px-4  hover:bg-[#F5F5F5] hover:rounded-lg flex items-center gap-2">
            Explore
            <FaChevronDown size={14} className="font-normal" />
          </li>
          <li className="text-[#707278] py-2 px-4 font-bold text-[15px] flex items-center gap-2">
            <CiGlobe size={20} className="font-normal" />
            EN
          </li>
          <li className="text-[#707278] py-2 px-4 font-bold text-[15px] flex items-center gap-2">
            Become a Seller
          </li>
          <li className="text-[#707278] py-2 px-4 font-bold text-[15px] flex items-center gap-2">
            Sign in
          </li>
          <li className="flex  items-center    justify-center">
            <button className="outline font-bold py-2 px-4 rounded hover:bg-black hover:text-white text-sm">
              Join
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
