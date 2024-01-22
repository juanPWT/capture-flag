import getCurrentUser from "@/app/action/getCurrentUser";
import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";

const Poin = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="flex items-center  gap-2 px-5">
      <RiCopperCoinFill />
      <p className="font-semibold text-lg">{currentUser?.poin}</p>
    </div>
  );
};

export default Poin;
