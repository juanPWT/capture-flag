import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "./components/Header";

function Dashboard() {
  return (
    <AuthLayout>
      <div className="min-h-screen w-full flex flex-col p-10 justify-between">
        <Header />
      </div>
    </AuthLayout>
  );
}

export default Dashboard;
