import React from "react";
import {
  BellAlertIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import ProfilePic from "../public/profile.png";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="h-20 relative max-w-7xl mx-auto items-center align-middle">
      <div className="flex items-center justify-between w-full absolute m-0 top-1/2 -translate-y-1/2 ">
        {/* Name */}
        <h1
          className="text-white text-xl font-bold uppercase tracking-[10px] select-none cursor-pointer hover:animate-pulse"
          onClick={() => {
            router.push({
              pathname: "/",
            });
          }}
        >
          Movie test
        </h1>
        {/* Search */}
        <div>
          <input
            type="search"
            id="default-search"
            className="block w-96 p-2.5 pl-5 text-sm text-white border border-[#707070] rounded-full bg-[#707070] placeholder:text-white"
            placeholder="Search Movies, Series..."
          />
        </div>
        {/* Profile */}
        <div className="flex space-x-7 items-center">
          <PlusIcon className="text-white h-5 w-5 cursor-pointer" />
          <BellAlertIcon className="text-white h-5 w-5 cursor-pointer" />
          <div className="flex space-x-3 items-center font-light">
            <div className="h-8 w-8">
              <Image src={ProfilePic} alt="Profile" className="rounded-full" />
            </div>
            <h1 className="text-white text-lg">Karim Khaled</h1>
            <ChevronDownIcon className="text-white h-4 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
