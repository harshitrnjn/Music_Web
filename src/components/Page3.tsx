import React from "react";
import { CardScroll } from "./CardScroll";

const Page3 = () => {
  return (
    <div className="w-full h-screen">
      <div className="mt-[5vw] h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col gap-y-[4vw]">
        <h1 className="text-5xl font-bold">Hear our Harmonies: Voice of Success</h1>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
        <CardScroll/>
      </div>
    </div>
  );
};

export default Page3;
