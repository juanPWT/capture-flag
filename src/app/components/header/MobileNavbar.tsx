"use client";
import React from "react";
import UserDropdown from "../UserDropdown";
import { ModeToggle } from "@/components/ui/toogle-mode";
import { User } from "@prisma/client";

interface MobileNavbarProps {
  currentUser: User | null;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ currentUser }) => {
  return (
    <nav className="w-full md:hidden  top-0 px-6 pt-4 flex justify-between">
      {/* start  */}
      <div className="w-full flex justify-start items-center gap-1">
        <ModeToggle />
      </div>
      {/* end  */}
      <div className="w-full flex justify-end items-center gap-4">
        <p>{currentUser?.name}</p>
        <UserDropdown image={currentUser?.image} />
      </div>
    </nav>
  );
};

export default MobileNavbar;
