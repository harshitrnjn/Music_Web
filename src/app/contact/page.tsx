"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beam";
import ButtonUi from "@/components/ButtonUi";

const page = () => {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4 flex justify-center items-center flex-col gap-y-3">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Join the waitlist
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      Immerse yourself in a symphony of sounds on our music website. From chart-toppers to hidden gems, explore a diverse array of tunes. With curated playlists, artist features, and a vibrant community, dive into the heart of music culture. Connect, discover, and celebrate the universal language of melodies with us.
      </p>
      <input
        type="text"
        placeholder="hi@manuarora.in"
        className="rounded-lg py-4 px-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
      />
      <input
        type="typearea"
        placeholder="Write your reviews..."
        className="rounded-lg h-[7vw] px-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
      />
     <button type="submit" className="text-gradient-to-b from-neutral-200 to-neutral-600 absolute font-semibold top-[78%] left-[47%] px-8 py-3 bg-zinc-700 text-lg rounded-full">
      Submit
     </button>
    </div>
    <BackgroundBeams />
  </div>
  )
}

export default page
