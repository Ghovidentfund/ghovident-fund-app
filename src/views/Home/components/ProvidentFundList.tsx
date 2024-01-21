"use client";

import { useEffect } from "react";
import { useContractRead } from "wagmi";

import { tokens } from "@/constants/tokenList";

import { Button } from "@/components/ui/button";
import FundCard from "@/components/Card/Fund/FundCard";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";

const ProvidentFundList = () => {
  const { data, isError, isLoading, refetch } = useContractRead({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "getAllPoolInfo",
  });

  useEffect(() => {
    // console.log(data[0]);
  }, [data]);

  return (
    <section id="provident fund list" className=" mb-12">
      <div className="my-4">
        <Button onClick={() => refetch()}>Refresh</Button>
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
              factSheetUrl={item.factSheetUri}
              symbol={tokens[item.assets].symbol || ""}
              volume={Number(item.totalVolume)}
              actionSlot={
                <div className="ml-16 flex flex-col justify-center items-center ">
                  <Button className="min-w-28" disabled>
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
