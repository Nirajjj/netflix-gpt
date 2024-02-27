import React from "react";

const ShimmerUi = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-2 absolute top-0 -z-40 p-10  rounded-md w-screen">
      <div className="col-span-5 row-span-4 bg-[#1A1A1A] relative rounded-sm">
        <div className="absolute top-0 left-0 h-full w-full shmmer-gradient shimmer-animation"></div>
      </div>
      {Array(10)
        .fill()
        .map((_, index) => (
          <div className="bg-[#1A1A1A] w-12/12 h-32 relative rounded-sm">
            <div className="absolute top-0 left-0 h-full w-full shmmer-gradient shimmer-animation"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUi;
