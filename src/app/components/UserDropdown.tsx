import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";

interface UserDropdownProps {
  image?: string | null;
  align?: "start" | "center" | "end";
}

const UserDropdown: React.FC<UserDropdownProps> = ({ image, align }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white flex items-center justify-center rounded-full hover:ring-2 hover:ring-slate-900 focus:outline-none">
        <Avatar>
          <AvatarImage src={image || "../person.png"} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem asChild>
          <Link
            href={"/account"}
            className="flex justify-start gap-2 items-center"
          >
            <MdOutlineAccountCircle />
            <span>setting account</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
