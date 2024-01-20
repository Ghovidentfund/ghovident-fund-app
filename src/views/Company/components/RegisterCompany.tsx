"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import { ModalView } from "@/stores/uiProvider/useUi.type";

const RegisterCompany = () => {
  const { openModal } = useUiProvider();

  const handleOpenModal = () => {
    openModal(ModalView.REGISTER_COMPANY);
  };

  return (
    <section id="register company">
      <div className="flex flex-col justify-center items-center mt-28 space-y-7">
        <Typography variant="topic" size="topic">
          Before buy provident please register you company
        </Typography>
        <Button onClick={handleOpenModal}>Register Your Company</Button>
      </div>
    </section>
  );
};

export default RegisterCompany;
