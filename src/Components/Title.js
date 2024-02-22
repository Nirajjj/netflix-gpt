import React from "react";
import { IoMdPlay } from "react-icons/io";
import { LuInfo } from "react-icons/lu";

const Title = ({ title, overview }) => {
  return (
    <div className="mt-44 ml-14">
      <h1 className="text-white text-5xl font-bold">{title}</h1>
      <p className="text-white text-xl w-5/12 my-6">{overview}</p>
      <div className="flex gap-2">
        <button className="px-6 py-2 bg-white text-black rounded-md font-semibold flex items-center text-lg">
          <IoMdPlay className="mr-1" />
          Play
        </button>
        <button className="px-6 py-2 bg-white text-black rounded-md font-semibold flex items-center text-lg justify-center">
          <LuInfo className="mr-1 mt-1 text-xl" />
          more info
        </button>
      </div>
    </div>
  );
};

export default Title;
