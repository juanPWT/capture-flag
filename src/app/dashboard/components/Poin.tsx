import getPoinByUser from "@/app/action/getPoinByUser";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";

const Poin = async () => {
  const poin = await getPoinByUser();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex justify-end items-center gap-2">
          <RiCopperCoinFill className="text-xl" />
          <p className="text-xl font-bold">{poin}</p>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>total your poin</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Poin;
