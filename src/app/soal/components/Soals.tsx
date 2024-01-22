import React from "react";
import Soal from "./Soal";
import getChallangeCurrentUser from "@/app/action/getChallangeCurrentUser";
import { formatDate } from "@/app/hook/formatDate";
import Image from "next/image";

const Soals = async () => {
  const soals = await getChallangeCurrentUser();

  if (soals.length <= 0) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-slate-900 text-2xl font-light dark:text-white">
          No soal found
        </h1>
        <Image
          src={"/not-found.png"}
          alt="not found"
          width={400}
          height={400}
          priority
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
      {soals.map((data) => {
        return (
          <Soal
            key={data.id}
            id={data.id}
            createdAt={formatDate(data.createdAt)}
            soal={data.soal}
            flag={data.Flag.flag}
            file={data.file || ""}
            isSolve={data.isSolved}
          />
        );
      })}
    </div>
  );
};

export default Soals;
