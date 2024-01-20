import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 bottom-0 flex justify-between">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-sm my-auto font-bold  text-gray-700 dark:text-white">
          Capture Flag
        </h1>
        <span className="hidden md:flex mx-2 text-xs font-extralight text-gray-700 my-auto dark:text-slate-50">
          with 💖 by JPWT
        </span>
      </div>
    </footer>
  );
};

export default Footer;
