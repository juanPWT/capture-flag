"use client";

import clsx from "clsx";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type: "text" | "password" | "email";
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disable?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  type,
  errors,
  register,
  disable,
}) => {
  return (
    <div className="my-1">
      <label
        htmlFor={id}
        className="text-sm text-gray-500 font-semibold dark:text-white"
      >
        {label}
      </label>
      <div className="mt-1 w-full">
        <input
          id={id}
          type={type}
          disabled={disable}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            `
          form-input
            block
            py-2
            px-4
            w-full
            rounded-md
            shadow-sm
            sm:text-sm
            border-0
            ring-1
            ring-gray-300
            focus:ring-indigo-500
            text-gray-900
            placeholder-gray-300
            dark:bg-slate-950
            dark:text-white
          `,
            errors[id] && "focus:ring-red-500",
            disable && "bg-gray-100"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
