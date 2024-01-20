import React from "react";
import Menu from "./Menu";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <IoMenu className="text-xl" />
          <h1 className="text-xl font-bold ">Menu</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
