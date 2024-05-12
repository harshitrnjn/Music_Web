import React from "react";
import ButtonUi from "./ButtonUi";
import SparkleEffect from "./SparkleEffect";

const Page1 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative">
      <div className="absolute top-[13%] left-0 -z-10 w-full"> <SparkleEffect/>  </div>
      <h1 className="text-[6vw] font-bold text-center w-full text-white/85 md:w-full ">
        Master the Art of Music
      </h1>
      <p className="mb-7 w-[33%] text-center text-2xl text-white/65">
        Dive into our comprehensive music courses and transform your journey
        today. Whether you're a beginner or looking to refine your skills, join
        us to unlock your true potentional.
      </p>
      <ButtonUi/>
    </div>
  );
};

export default Page1;
{/* <SpotLightBackGround/> */}