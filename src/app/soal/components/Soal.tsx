import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiCopperCoinFill } from "react-icons/ri";
import Link from "next/link";

interface SoalProps {
  id: number;
  createdAt: string;
  soal: string;
  flag: string;
  file?: string;
  isSolve?: boolean;
}

const Soal: React.FC<SoalProps> = ({
  createdAt,
  flag,
  id,
  soal,
  file,
  isSolve,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-xl text-slate-900 dark:text-white">
              Soal {id}
            </h1>
            {isSolve && (
              <span className="outline outline-1 px-4 py-1 rounded-full text-sm">
                solved
              </span>
            )}
          </div>
          <p className="text-xs font-light text-slate-500 dark:text-white">
            {createdAt}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-slate-800 dark:text-white">
          {soal}
        </p>

        <p className="my-2 text-slate-600 font-light dark:text-white">
          flag: {flag ? flag : "Belum ada flag"}
        </p>

        {file && (
          <p>
            file name:{" "}
            <Link
              href={`http://localhost:3000/soal/${file}`}
              target="_blank"
              className="text-sky-700 font-light"
              locale={false}
            >
              {file}
            </Link>
          </p>
        )}
      </CardContent>
      <CardFooter className="items-end justify-end flex gap-3">
        {/* <Button variant={"outline"} size={"icon"}>
          <CiEdit />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <MdDelete />
        </Button> */}
        <RiCopperCoinFill className="my-auto" />
        <p className="my-auto  text-slate-900 font-semibold">5</p>
      </CardFooter>
    </Card>
  );
};

export default Soal;
