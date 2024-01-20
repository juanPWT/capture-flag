import React from "react";
import FooterNav from "../footer/FooterNav";
import Sidebar from "../sidebar/Sidebar";
import getCurrentUser from "@/app/action/getCurrentUser";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="flex w-full gap-3">
        <Sidebar currentUser={currentUser} />
        <div className="w-full md:pl-[70px] pb-[70px]">{children}</div>
      </div>
      <FooterNav />
    </div>
  );
};

export default AuthLayout;
