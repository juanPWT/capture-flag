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
import Link from "next/link";

interface SoalProps {
  id: number;
  createdAt: string;
  soal: string;
  flag: string;
  file?: string;
}

const Soal: React.FC<SoalProps> = ({ createdAt, flag, id, soal, file }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-start items-start gap-1">
          <h1 className="font-semibold text-xl text-slate-900">Soal {id}</h1>
          <p className="text-xs font-light text-slate-500">{createdAt}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-slate-800">{soal}</p>

        <p className="my-2 text-slate-600 font-light">
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
        <Button variant={"outline"} size={"icon"}>
          <CiEdit />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <MdDelete />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Soal;
