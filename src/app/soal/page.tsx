import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import { RiQuestionnaireLine } from "react-icons/ri";
import GenerateSoal from "./components/GenerateSoal";
import Soals from "./components/Soals";
import Poin from "./components/Poin";

const Soal = () => {
  return (
    <AuthLayout>
      <div className="min-h-screen px-5 py-3 w-full flex flex-col">
        <div className="text-3xl w-full font-semibold flex justify-center md:justify-between items-center  text-slate-900 my-2 dark:text-white">
          <div className="flex gap-2 items-center ">
            <RiQuestionnaireLine />
            <h1>Challange</h1>
          </div>
          <div className="my-auto hidden lg:block">
            <Poin />
          </div>
        </div>
        <div className="w-full flex justify-between ">
          <div className="my-auto lg:hidden">
            <Poin />
          </div>
          <GenerateSoal />
        </div>
        <Soals />
      </div>
    </AuthLayout>
  );
};

export default Soal;
