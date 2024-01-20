"use client";
import ModalCreate from "@/app/components/ModalCreate";
import Input from "@/app/components/inputs/Input";
import InputFile from "@/app/components/inputs/InputFile";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const GenerateSoal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      soal: "",
      poin: 0,
      kategori: "",
      flag: "",
    },
  });

  const onCLick: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (!data) {
      toast.error("challange is required");
      setIsLoading(false);
      return;
    }

    // formdata
    const formData = new FormData();
    //validation with file or nah
    if (!file) {
      formData.set("soal", data.soal);
      formData.set("poin", data.poin);
      formData.set("kategori", data.kategori);
      formData.set("flag", data.flag);

      axios
        .post("/api/soal", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("success generate soal");
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.data) {
            toast.error(err.response.data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            toast.error("error generate soal");
          }
        });
    } else {
      formData.set("file", file as Blob);
      formData.set("soal", data.soal);
      formData.set("poin", data.poin);
      formData.set("kategori", data.kategori);
      formData.set("flag", data.flag);

      axios
        .post("/api/soal", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("success generate soal");
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.data) {
            toast.error(err.response.data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            toast.error("error generate soal");
          }
        });
    }
  };

  return (
    <div className="w-full my-2 px-5 py-7 flex justify-end items-end">
      <ModalCreate
        modalTitle="generate challange"
        modalButtonLabel="generate challange"
        modalDescription="ini generate challange"
      >
        <form onSubmit={handleSubmit(onCLick)} className="grid gap-4 py-4">
          <Input
            id="soal"
            label="challange"
            type="text"
            disable={isLoading}
            required
            register={register}
            errors={errors}
          />
          <Input
            id="poin"
            label="poin"
            type="text"
            disable={isLoading}
            required
            register={register}
            errors={errors}
          />
          <Input
            id="kategori"
            label="category"
            type="text"
            disable={isLoading}
            required
            register={register}
            errors={errors}
          />
          <Input
            id="flag"
            label="put flag here"
            type="text"
            disable={isLoading}
            required
            register={register}
            errors={errors}
          />
          <InputFile
            id="soal-file"
            label={file ? file.name : "option file"}
            onChange={(e) => setFile(e.target.files?.[0])}
            disable={isLoading}
          />
          <DialogFooter>
            <Button disabled={isLoading}>generate the soal</Button>
          </DialogFooter>
        </form>
      </ModalCreate>
    </div>
  );
};
export default GenerateSoal;
