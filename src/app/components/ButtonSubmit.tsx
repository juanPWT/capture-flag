"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const ButtonSubmit: React.FC<ButtonProps> = ({
  type,
  fullwidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `my-2 flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled &&
          "bg-opacity-50 text-gray-500 hover:bg-opacity-35 cursor-not-allowed ",
        secondary ? " text-gray-700" : "text-white",
        fullwidth && "w-full",
        danger &&
          "bg-red-500  hover:bg-rose-600 focus-visible:outline-rose-700",
        !secondary &&
          !danger &&
          "bg-slate-900 hover:bg-slate-800 focus-visible:outline-slate-700 dark:bg-white dark:hover:bg-gray-100 dark:text-slate-900 dark:focus-visible:outline-gray-100"
      )}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
