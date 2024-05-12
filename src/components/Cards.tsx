"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
const Cards = ({title , disc} : { 
    title: string,
    disc : string
}) => {
  return (
    <div className="w-[30vw] h-[18vw] m-2">
    <BackgroundGradient className="rounded-[22px] text-center flex justify-center items-center flex-col p-4 sm:p-10 bg-white dark:bg-black w-[98.5%] h-[98.5%]">
      
      <p className="text-3xl font-bold text-black mt-4 mb-2 dark:text-neutral-200 w-full ">
       {title}
      </p>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 w-[65%] text-center">
        {disc}
      </p>
      <button className="rounded text-md px-6 py-2 text-white flex items-center space-x-1 bg-black mt-5 dark:bg-zinc-800">
       Explore More
      </button>
    </BackgroundGradient>
  </div>
  )
}

export default Cards
