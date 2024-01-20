"use client";
import ModalCreate from "@/app/components/ModalCreate";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import React, { useState } from "react";
import Input from "@/app/components/inputs/Input";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const GenerateFlag = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      signature: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/flag", data)
      .then((res) => {
        toast.success("success generate flag");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("error generate flag");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full my-2 px-5 py-7 flex justify-end items-end">
      <ModalCreate
        modalButtonLabel="generate flag"
        modalTitle="generate flag"
        modalDescription="input your signture for the unique flag. example: '20240107_THISSIGNATURE'"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <Input
            id="signature"
            label="signature"
            type="text"
            disable={isLoading}
            required
            register={register}
            errors={errors}
          />
          <DialogFooter>
            <Button disabled={isLoading}>generate the flag</Button>
          </DialogFooter>
        </form>
      </ModalCreate>
    </div>
  );
};

export default GenerateFlag;
