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
import { useEffect, useState } from "react";

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
