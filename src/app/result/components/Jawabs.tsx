import React from "react";
import Jawab from "./Jawab";
import getJawabByUser from "@/app/action/getJawabByUser";
import { formatDate } from "@/app/hook/formatDate";
import Link from "next/link";

const Jawabs = async () => {
  const jawabs = await getJawabByUser();

  if (jawabs.length <= 0) {
    return (
      <div className="w-full flex items-center justify-center">
        <h1 className="text-xl font-bold">
          your not solve anything challenge, {""}
          <Link href={"/challange"} className="text-sky-600">
            go solve challenges
          </Link>
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {jawabs.map((data, i) => {
        return (
          <Jawab
            key={i}
            createdAt={formatDate(data.createdAt)}
            email={data.Soal.User.email}
            name={data.Soal.User.name}
            image={data.Soal.User.image}
            poin={data.poin}
            soal={data.Soal.soal}
          />
        );
      })}
    </div>
  );
};

export default Jawabs;
