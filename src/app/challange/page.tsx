import React from "react";
import GuestLayout from "../components/layouts/GuestLayout";

import { FaCircleQuestion } from "react-icons/fa6";
import Soals from "./component/Soal";
import getChallanges from "../action/getChallanges";
import { FullSoalInterface } from "../types";

const Challange = async () => {
  const challanges: FullSoalInterface[] = await getChallanges();

  return (
    <GuestLayout>
      <div className="w-full flex flex-col gap-10 mt-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl flex justify-center items-center gap-2 font-bold text-gray-800 dark:text-gray-100">
            <FaCircleQuestion />
            Challenge
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This is a challenge page
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {challanges.map((data, i) => {
            return <Soals soal={data} key={i} />;
          })}
        </div>
      </div>
    </GuestLayout>
  );
};

export default Challange;
