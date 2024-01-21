"use client";

import Modal from "@/components/Modal/Modal";
import { Toaster } from "@/components/ui/toaster";
import { ModalView } from "@/stores/uiProvider/useUi.type";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import RegisterCompanyModal from "@/views/Company/components/RegisterCompanyModal";
import BuyProvidentFundModal from "@/views/Home/components/BuyProvidentFund";
import { useAccount, useContractRead } from "wagmi";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import { useEffect } from "react";
import useProvidentFund from "@/stores/providentFund/useProvidentFund.store";

interface UIProvideProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProvideProps) => {
  const { setHasCompany } = useProvidentFund((state) => state);

  const { address, isConnected } = useAccount();

  const { data: hasCompany, refetch } = useContractRead({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "isValidCompany",
    args: [address],
  });

  const ModalUI = () => {
    const { modalView, displayModal, closeModal } = useUiProvider(
      (state) => state
    );

    return (
      <Modal open={displayModal} onClose={closeModal}>
        <div>
          {modalView === ModalView.REGISTER_COMPANY && <RegisterCompanyModal />}
          {modalView === ModalView.BUY_PROVIDENT_FUND && (
            <BuyProvidentFundModal />
          )}
        </div>
      </Modal>
    );
  };

  useEffect(() => {
    setHasCompany(hasCompany as boolean);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <>
      {children}
      <ModalUI />
      <Toaster />
    </>
  );
};

export default UIProvider;
