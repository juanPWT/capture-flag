import React from "react";

import Flag from "./Flag";
import getFlagsUser from "@/app/action/getFlagsUser";
import Image from "next/image";

const Flags = async () => {
  const flags = await getFlagsUser();

  if (flags.length === 0) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-slate-900 text-2xl font-light dark:text-white">
          No flags found
        </h1>
        <Image
          src={"/not-found.png"}
          alt="not found"
          width={400}
          height={400}
          priority
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
      {flags.map((item, index) => {
        const createdAt = new Date(item.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <Flag
            key={index}
            index={index + 1}
            flag={item.flag}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};

export default Flags;
