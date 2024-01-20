import React from "react";
import MenuCard from "./MenuCard";
import useMenu from "@/app/hook/useMenu";

const Menu = () => {
  const menu = useMenu();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {menu.map((item, i) => {
        return (
          <MenuCard
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            path={item.path}
          />
        );
      })}
    </div>
  );
};

export default Menu;
