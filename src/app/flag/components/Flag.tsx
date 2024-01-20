"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

interface FlagProps {
  index: number;
  createdAt: string;
  flag: string;
}

const Flag: React.FC<FlagProps> = ({ index, createdAt, flag }) => {
  const copyFlag = () => {
    navigator.clipboard.writeText(flag);
    toast("Flag copied to clipboard");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flag {index}</CardTitle>
        <CardDescription>This flag created at {createdAt}</CardDescription>
      </CardHeader>
      <CardContent className="break-words">
        <h1 className="text-slate-500 dark:text-white text-xl  sm:text-xs lg:text-sm">
          {flag}
        </h1>
      </CardContent>
      <CardFooter className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                onClick={() => copyFlag()}
                variant={"outline"}
                size={"icon"}
              >
                <FaCopy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <h1>Copy flag</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default Flag;
