import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "./components/Header";
import Jawabs from "./components/Jawabs";

const Result = () => {
  return (
    <AuthLayout>
      <div className="mimin-h-screen w-full flex flex-col p-10 justify-between gap-10">
        <Header />
        <Jawabs />
      </div>
    </AuthLayout>
  );
};

export default Result;
