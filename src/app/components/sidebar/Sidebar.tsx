"use client";
import useRoutes from "@/app/hook/useRoutes";
import React from "react";
import SidebarItem from "./SidebarItem";
import UserDropdown from "../UserDropdown";
import { User } from "@prisma/client";
import { ModeToggle } from "@/components/ui/toogle-mode";

interface SidebarProps {
  currentUser: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();

  return (
    <div className="hidden fixed h-full  px-3 pt-10 pb-5 md:flex flex-col justify-between bg-slate-700/20">
      <div className="w-full flex flex-col gap-4">
        {routes.map((item) => {
          return (
            <SidebarItem
              key={item.name}
              icon={item.icon}
              name={item.name}
              href={item.path}
              active={item.active}
              onclick={item.onClick}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <ModeToggle />
        <UserDropdown image={currentUser?.image} align="start" />
      </div>
    </div>
  );
};

export default Sidebar;
