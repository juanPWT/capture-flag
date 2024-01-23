"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "../ButtonSubmit";
import IsAuthenticated from "../../hook/IsAuthenticated";
import { ModeToggle } from "@/components/ui/toogle-mode";
import Menu from "../Menu";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full  flex justify-between fixed top-0 px-10 py-3 md:py-5 z-50">
      {/* start */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start">
        <Link
          href={"/"}
          className="text-sm md:text-xl my-auto font-bold  text-gray-700 dark:text-white"
        >
          Capture flag
        </Link>
      </div>
      {/* center  */}
      <div className="w-full flex justify-center items-center">
        <Menu label="Challange" url="/challange" label2="About us" url2="#" />
      </div>
      {/* end  */}
      <div className="w-full flex justify-end items-center">
        <div className="mx-3">
          <ModeToggle />
        </div>
        {IsAuthenticated() ? (
          <ButtonSubmit type="button" onClick={() => router.push("/dashboard")}>
            dashboard
          </ButtonSubmit>
        ) : (
          <ButtonSubmit type="button" onClick={() => router.push("/auth")}>
            login
          </ButtonSubmit>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
