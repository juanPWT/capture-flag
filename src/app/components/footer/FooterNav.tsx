"use client";

import useRoutes from "@/app/hook/useRoutes";
import React from "react";
import FooterNavItem from "./FooterNavItem";

const FooterNav = () => {
  const routes = useRoutes();
  return (
    <div className="fixed flex md:hidden w-full bottom-0 justify-between py-4 px-20 bg-slate-700/20">
      {routes.map((item) => {
        return (
          <FooterNavItem
            key={item.name}
            icon={item.icon}
            href={item.path}
            onclick={item.onClick}
            active={item.active}
          />
        );
      })}
    </div>
  );
};

export default FooterNav;
