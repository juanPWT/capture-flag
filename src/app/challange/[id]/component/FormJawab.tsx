"use client";
import Input from "@/app/components/inputs/Input";
import { useConfetti } from "@/app/provider/ConfettiProvider";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface FormJawabProps {
  flag: string | undefined;
  ownerChallange: string | null | undefined;
  soalId: number | undefined;
  poin: number | undefined;
}

const FormJawab: React.FC<FormJawabProps> = ({
  flag,
  ownerChallange,
  soalId,
  poin,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { confetti } = useConfetti();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      jawab: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (flag === undefined && ownerChallange === null) {
      toast.error("flag challenge not found");
      setIsLoading(false);
      return;
    }

    if (data.jawab !== flag) {
      toast.error("flag invalid");
      setIsLoading(false);
      return;
    }

    axios
      .post("/api/jawab", {
        soalId,
        jawaban: data.jawab,
        poin,
      })
      .then((res) => {
        confetti();
        toast.success(
          `congrat your solve this challange from ${ownerChallange}`
        );
        // router.push("/challange");
        window.location.href = "/challange";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="jawab"
        label="put flag here"
        type="text"
        register={register}
        errors={errors}
        disable={isLoading}
        required
      />
      <div className="mt-5 w-full ">
        <Button size={"lg"} disabled={isLoading} className="w-full">
          send
        </Button>
      </div>
    </form>
  );
};

export default FormJawab;
