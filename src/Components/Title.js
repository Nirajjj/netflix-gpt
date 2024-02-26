import React from "react";
import { IoMdPlay } from "react-icons/io";
import { LuInfo } from "react-icons/lu";

const Title = ({ title, overview }) => {
  return (
    <div className="md:mt-24 mt-11 md:ml-14 ml-4">
      <h1 className="text-white md:text-5xl text-base font-bold">{title}</h1>
      <p className="text-white text-md w-4/12 my-6 hidden md:inline-block">
        {overview}
      </p>
      <div className="flex gap-2">
        <button className="md:px-7 md:py-2 px-4 py-0 bg-white text-black rounded-md font-semibold flex items-center md:text-lg text-sm hover:bg-slate-300">
          <IoMdPlay className="mr-1" />
          Play
        </button>
        <button className="px-6 py-2 bg-[#515355] text-white rounded-md font-semibold flex items-center md:text-lg text-sm justify-center">
          <LuInfo className="mr-1 mt-1 md:text-xl " />
          more info
        </button>
      </div>
    </div>
  );
};

export default Title;
