import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import GenerateFlag from "./components/GenerateFlag";
import Flags from "./components/Flags";

const Flag = () => {
  return (
    <AuthLayout>
      <GenerateFlag />
      <div className="min-h-screen px-5 py-3 w-full flex flex-col">
        <Flags />
      </div>
    </AuthLayout>
  );
};

export default Flag;
