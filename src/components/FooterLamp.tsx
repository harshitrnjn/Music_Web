"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const FooterLamp = () => {
  return (
    <LampContainer>
      <div className="w-full flex justify-center items-center flex-col mt-12">
        <p className="w-[65%] text-center text-2xl font-semibold text-zinc-300">
          Explore, discover, and immerse yourself in the world of music with
          Ranjan Creation. From latest hits to timeless classics, we've got you
          covered. Connect with fellow music lovers, find your rhythm, and let
          the melody guide your journey.
        </p>
        <span className="mt-5 text-black/85 text-lg">© 2003 Ranjan Creation. All rights reserved</span>
        <div className="flex gap-5 mt-5 text-2xl text-black">
        <FaFacebook className="hover:cursor-pointer"/>
        <FaXTwitter className="hover:cursor-pointer"/>
        <FaInstagramSquare className="hover:cursor-pointer"/>
        </div>
      </div>
    </LampContainer>
  );
};

export default FooterLamp;
