"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CgMenuGridR } from "react-icons/cg";
import Link from "next/link";

interface MenuNavbarProps {
  label: string;
  label2?: string;
  label3?: string;
  url: string;
  url2?: string;
  url3?: string;
}

const Menu: React.FC<MenuNavbarProps> = ({
  label,
  label2,
  label3,
  url,
  url2,
  url3,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <CgMenuGridR />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem asChild>
          <Link href={url}>{label}</Link>
        </DropdownMenuItem>
        {label2 && url2 && (
          <DropdownMenuItem asChild>
            <Link href={url2}>{label2}</Link>
          </DropdownMenuItem>
        )}
        {label3 && url3 && (
          <DropdownMenuItem asChild>
            <Link href={url3}>{label3}</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
