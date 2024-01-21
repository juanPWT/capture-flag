import getCurrentUser from "@/app/action/getCurrentUser";
import getPoinByUser from "@/app/action/getPoinByUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Header = async () => {
  const currentUser = await getCurrentUser();
  const poin = await getPoinByUser();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-3">
        <Link href={"/dashboard"} className="flex items-center gap-2 group">
          <FaArrowLeft className="text-xl group-hover:text-slate-600" />
          <h1 className="text-xl font-bold  group-hover:text-slate-600">
            back
          </h1>
        </Link>
      </div>
      <div className="my-10 flex flex-col lg:flex-row gap-2 w-full items-center justify-center lg:items-start lg:justify-start">
        <Avatar className="w-[150px] h-[150px]">
          <AvatarImage src={currentUser?.image || "./person.png"} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <div className="text-center lg:text-start my-auto">
          <h1 className="text-3xl font-bold">{currentUser?.name}</h1>
          <h2 className="text-xl font-medium">Total poin : {poin}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
