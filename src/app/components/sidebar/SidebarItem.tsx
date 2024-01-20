"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface SidebarItemPorps {
  name: string;
  icon: any;
  href: string;
  active?: boolean;
  onclick?: () => void;
}

const SidebarItem: React.FC<SidebarItemPorps> = ({
  href,
  icon: Icon,
  name,
  active,
  onclick,
}) => {
  const handleClick = () => {
    if (onclick) onclick();
  };
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <Button
        onClick={handleClick}
        variant={"outline"}
        size={"icon"}
        className={clsx(active && `bg-gray-200 dark:bg-slate-700/10`)}
      >
        <Link href={href}>
          <Icon />
        </Link>
      </Button>
      <span className="text-sm font-light text-gray-500 dark:text-white">
        {name}
      </span>
    </div>
  );
};

export default SidebarItem;
