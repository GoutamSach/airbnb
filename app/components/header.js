"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header>
      <div className="  grid grid-cols-3 px-4 shadow-md  ">
        {/* start header */}
        <div className="flex flex-row ">
          <Image
            src="/Airbnb-logo.png"
            alt=""
            width={120}
            height={0}
            className="  cursor-pointer"
            priority={true}
          />
        </div>
        {/* Mid Header */}
        <div className=" flex sm:border sm:rounded-full sm:border-2 sm:border-gray-300 px-2  items-center my-3 hover:shadow-md  focus-within:shadow-md">
          <input
            type="text"
            placeholder="Start your search"
            className="mr-2  text-s w-24 focus:outline-none cursor-pointer bg-transparent  flex-grow"
          />
          <SearchIcon className=" bg-red-400  text-white  rounded-full p-1 hidden  sm:inline-flex cursor-pointer" />
        </div>
        {/* right header */}
        <div className=" flex flex-row items-center space-x-2 justify-end ">
          <div className="hover:bg-gray-100 rounded-full px-3 py-2 active:scale-95">
            <p className=" cursor-pointer text-gray-700  hidden md:inline-flex pr-2 ">
              Become a host
            </p>
            <LanguageIcon className=" cursor-pointer text-gray-700" />
          </div>
          <div className="  rounded-full hover:shadow-md active:scale-95">
            <div className=" flex flex-row  space-x-2 border rounded-full border-2  border-gray-300 p-2">
              <MenuIcon className=" cursor-pointer text-gray-700" />
              <AccountCircleIcon className=" cursor-pointer text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;