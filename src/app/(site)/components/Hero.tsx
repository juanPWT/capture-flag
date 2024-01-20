import Link from "next/link";
import React from "react";
import ButtonHero from "./ButtonHero";

const Hero = () => {
  return (
    <div className="mt-24 w-full  flex flex-col justify-center text-center items-center">
      <h1 className="text-2xl md:text-5xl font-bold ">
        Selamat datang di Capture Flag
      </h1>
      <h3 className="my-2 text-xl md:text-2xl">
        Solve soal pertanyaan dari challangers dan dapatkan point
      </h3>
      <div className="my-4 flex gap-3">
        <ButtonHero />
        <Link
          href={"#"}
          className="my-auto text-center border px-2 py-2 rounded-md shadow-sm hover:bg-gray-100 "
        >
          learn capture flag
        </Link>
      </div>
    </div>
  );
};

export default Hero;
