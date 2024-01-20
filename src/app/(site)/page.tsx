import React from "react";
import GuestLayout from "../components/layouts/GuestLayout";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <GuestLayout>
      <div className="w-full flex flex-col ">
        <Hero />
      </div>
    </GuestLayout>
  );
};

export default Home;
