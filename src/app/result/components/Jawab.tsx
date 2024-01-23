import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

interface JawabProps {
  image: string | null;
  name: string | null;
  email: string;
  poin: number;
  soal: string;
  createdAt: string;
}

const Jawab: React.FC<JawabProps> = ({
  image,
  createdAt,
  email,
  name,
  poin,
  soal,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex  justify-between ">
          <div className="flex justify-start items-center">
            <Avatar>
              <AvatarImage
                src={image || "./person.png"}
                width={100}
                height={100}
                className="bg-white"
              />
              <AvatarFallback>p</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <h3 className="font-semibold text-sm">{name}</h3>
              <p className="text-xs font-light">{email}</p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-1">
            <p className="text-sm font-semibold ">poin : </p>
            <p className="font-light">{poin}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 break-words">{soal}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <p className="font-extralight text-sm">{createdAt}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Jawab;
