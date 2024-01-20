"use client";
import React from "react";
import { FaFileUpload } from "react-icons/fa";
import clsx from "clsx";

interface InputFileProps {
  label?: string;
  id: string;
  disable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<InputFileProps> = ({
  label,
  id,
  disable,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={clsx(
          "bg-slate-900 text-white px-4 py-2 rounded-lg flex justify-center items-center cursor-pointer gap-2 hover:bg-slate-800",

          disable && "bg-slate-200 hover:bg-slate-200 cursor-default"
        )}
      >
        <FaFileUpload />
        <span>{label}</span>
      </label>
      <div className="mt-1">
        <input
          type="file"
          id={id}
          onChange={onChange}
          disabled={disable}
          autoComplete={id}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default InputFile;
