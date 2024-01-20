"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalCreateProps {
  children: React.ReactNode;
  modalButtonLabel?: string;
  modalTitle?: string;
  modalDescription?: string;
}

const ModalCreate: React.FC<ModalCreateProps> = ({
  children,
  modalButtonLabel,
  modalTitle,
  modalDescription,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <FaPlus className="mr-2 " />
          {modalButtonLabel || "open modal"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{modalTitle || "modal title"}</DialogTitle>
          <DialogDescription>
            {modalDescription || "description modal"}
          </DialogDescription>
        </DialogHeader>
        <div className="my-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCreate;
