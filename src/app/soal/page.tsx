import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import { RiQuestionnaireLine } from "react-icons/ri";
import GenerateSoal from "./components/GenerateSoal";
import Soals from "./components/Soals";

const Soal = () => {
  return (
    <AuthLayout>
      <div className="min-h-screen px-5 py-3 w-full flex flex-col">
        <div className="text-3xl font-semibold flex justify-center md:justify-start items-center gap-2 text-slate-900 my-2">
          <RiQuestionnaireLine />
          <h1>Challange</h1>
        </div>
        <GenerateSoal />
        <Soals />
      </div>
    </AuthLayout>
  );
};

export default Soal;
