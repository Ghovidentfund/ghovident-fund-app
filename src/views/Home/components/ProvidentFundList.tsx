"use client";

import { useEffect } from "react";
import { useContractRead } from "wagmi";

import { tokens } from "@/constants/tokenList";

import { Button } from "@/components/ui/button";
import FundCard from "@/components/Card/Fund/FundCard";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import { ModalView } from "@/stores/uiProvider/useUi.type";
import useProvidentFund from "@/stores/providentFund/useProvidentFund.store";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const ProvidentFundList = () => {
  const { openModal, displayModal } = useUiProvider();
  const { setProvidentFund, hasCompany } = useProvidentFund();

  const { data, isLoading, refetch } = useContractRead({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "getAllPoolInfo",
  });

  const handleOpenModalBuyProvidentFund = (info: ProvidentFund) => {
    setProvidentFund(info);
    openModal(ModalView.BUY_PROVIDENT_FUND);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayModal]);

  return (
    <section id="provident fund list" className=" mb-12">
      <div className="my-4 flex w-full justify-end">
        <Button variant="ghost" onClick={() => refetch()}>
          <div className="space-x-2 flex items-center">
            <RefreshCcw className={cn(isLoading && "animate-spin")} />
            <span>Refresh</span>
          </div>
        </Button>
      </div>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {(data as ProvidentFund[])?.map((item, index) => (
            <FundCard
              key={index}
              fundName={item.name}
              fundLogoUrl={item.logoUri}
              period={String(item.period)}
              risk={String(item.risk)}
              factSheetUrl={item.factSheetUri}
              symbol={tokens[item.assets].symbol || ""}
              volume={item.totalVolume}
              tokenAddress={item.assets}
              actionSlot={
                <div className="ml-16 flex flex-col justify-center items-center ">
                  <Button
                    className="min-w-28"
                    onClick={() => handleOpenModalBuyProvidentFund(item)}
                    disabled={!hasCompany}
                  >
                    Buy
                  </Button>
                </div>
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProvidentFundList;
