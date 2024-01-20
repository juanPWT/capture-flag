"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

interface DownloadButtonProps {
  file: string | null;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ file }) => {
  if (!file) {
    return null;
  }
  return (
    <>
      file :{" "}
      <Link
        onClick={() => toast(`Downloaded ${file}}`)}
        download={file}
        href={`http://localhost:3000/soal/${file}`}
        target="_blank"
        rel="noreferrer "
        className="text-sky-500"
      >
        {file}
      </Link>
    </>
  );
};

export default DownloadButton;
