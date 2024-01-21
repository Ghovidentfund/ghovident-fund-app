"use client";

import Modal from "@/components/Modal/Modal";
import { ModalView } from "@/stores/uiProvider/useUi.type";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import RegisterCompanyModal from "@/views/Company/components/RegisterCompanyModal";
import { Toaster } from "@/components/ui/toaster";

interface UIProvideProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProvideProps) => {
  const ModalUI = () => {
    const { modalView, displayModal, closeModal } = useUiProvider(
      (state) => state
    );

    return (
      <Modal open={displayModal} onClose={closeModal}>
        <div>
          {modalView === ModalView.REGISTER_COMPANY && <RegisterCompanyModal />}
        </div>
      </Modal>
    );
  };

  return (
    <>
      {children}
      <ModalUI />
      <Toaster />
    </>
  );
};

export default UIProvider;
