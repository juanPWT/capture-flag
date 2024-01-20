"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface FooterNavItemProps {
  icon: any;
  href: string;
  active?: boolean;
  onclick?: () => void;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({
  icon: Icon,
  href,
  active,
  onclick,
}) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  };

  return (
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
  );
};

export default FooterNavItem;
