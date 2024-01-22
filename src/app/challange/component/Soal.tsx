"use client";
import IsAuthenticated from "@/app/hook/IsAuthenticated";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaPercentage } from "react-icons/fa";
import { RiCopperCoinLine } from "react-icons/ri";
import MenuSoal from "./MenuSoal";
import toast from "react-hot-toast";
import { formatDate } from "../../hook/formatDate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FullSoalInterface } from "@/app/types";

interface SoalsProps {
  soal: FullSoalInterface;
}

const Soals: React.FC<SoalsProps> = ({ soal }) => {
  return (
    <Card className="hover:bg-slate-100 dark:hover:bg-slate-700">
      <CardHeader className="flex flex-row justify-between ">
        <div className="my-auto flex gap-2">
          <div>
            <Avatar>
              <AvatarImage
                className="bg-white"
                src={soal.User.image || "../person.png"}
              />
              <AvatarFallback>u</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-[0.5px]">
            <p>{soal.User.name}</p>
            <p className="text-xs font-light text-slate-500 my-auto">
              {formatDate(soal.createdAt)}
            </p>
          </div>
        </div>
        <MenuSoal />
      </CardHeader>
      {IsAuthenticated() ? (
        <Link href={"/challange/" + soal.id}>
          <CardContent className="flex justify-start items-start text-start">
            <p>{soal.soal}</p>
          </CardContent>
        </Link>
      ) : (
        <Link
          href={"#"}
          onClick={() =>
            toast("you must be login first!", {
              position: "top-right",
            })
          }
        >
          <CardContent className="flex justify-start items-start text-start">
            <p>{soal.soal}</p>
          </CardContent>
        </Link>
      )}

      <CardFooter className="flex justify-end items-end gap-3">
        {/* <div className="flex justify-center items-center gap-1 text-sm">
          <AiTwotoneLike />
          <p>100</p>
        </div>
        <div className="flex justify-center items-center gap-1 text-sm">
          <FaPercentage />
          <p>100 %</p>
        </div> */}
        <div className="flex justify-center items-center gap-1 text-sm">
          <RiCopperCoinLine />
          <p>{soal.poin}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Soals;
