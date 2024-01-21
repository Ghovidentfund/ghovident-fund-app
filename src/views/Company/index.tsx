"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAccount, useContractRead } from "wagmi";

import Container from "@/components/Common/Container";
import RegisterCompany from "@/views/Company/components/RegisterCompany";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import { GhovidentFactory } from "@/constants/contract.constant";

const CompanyInformation = dynamic(
  () => import("./components/CompanyInformation"),
  { ssr: false }
);

const CompanyView = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [mounted, setMounted] = useState(false);

  const { data: hasCompany } = useContractRead({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "isValidCompany",
    args: [address],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container>
      {mounted && (
        <>
          {hasCompany ? (
            <div className="space-y-6">
              <CompanyInformation />
              <MyProvidentList />
            </div>
          ) : (
            <RegisterCompany />
          )}
        </>
      )}
    </Container>
  );
};

export default CompanyView;
