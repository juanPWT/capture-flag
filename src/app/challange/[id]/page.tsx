import GuestLayout from "@/app/components/layouts/GuestLayout";
import React from "react";
import FormJawab from "./component/FormJawab";
import getChallangeById from "@/app/action/getChallangeById";
import { formatDate } from "../../hook/formatDate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import DownloadButton from "./component/DownloadButton";
import getCurrentUser from "@/app/action/getCurrentUser";

const ChallangeById = async ({ params }: { params: { id: number } }) => {
  const id = params.id;

  const challange = await getChallangeById(Number(id));
  const currentUser = await getCurrentUser();

  return (
    <GuestLayout>
      <div className="w-full  flex justify-center items-center">
        <div className="my-20 rounded-lg  outline outline-1 outline-slate-900 shadow-sm flex p-10 flex-col ">
          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <Avatar>
                  <AvatarImage
                    className="bg-white"
                    src={challange?.User.image || "../person.png"}
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-[0.5px] text-sm mr-2 md:mr-5">
                  <p className="font-semibold break-words">
                    {challange?.User.name}
                  </p>
                  <p className="text-xs font-light text-slate-500">
                    {challange?.User.email}
                  </p>
                </div>
              </div>
              <h1 className="font-semibold text-xs md:text-sm text-end">
                Challenge {challange?.kategori}
              </h1>
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="flex w-full justify-between items-center">
              <p className="text-slate-500 text-sm font-light ">
                {formatDate(challange?.createdAt)}
              </p>
              <p className="text-sm  text-slate-500 ">
                poin: {challange?.poin}
              </p>
            </div>
            <p className="my-10 text-left  w-full text-sm text-slate-900 dark:text-white">
              {challange?.soal}
            </p>
          </div>
          <div className="mt-3">
            <DownloadButton file={challange?.file || null} />
          </div>
          <div className="w-full mt-3">
            {currentUser?.id === challange?.userId ? (
              <p className="font-semibold w-full text-lg text-center">
                This your challange!!
              </p>
            ) : (
              <FormJawab
                flag={challange?.Flag.flag}
                ownerChallange={challange?.User.name}
                soalId={challange?.id}
                poin={challange?.poin}
              />
            )}
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ChallangeById;
