"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAccount, useContractRead } from "wagmi";

import Container from "@/components/Common/Container";
import RegisterCompany from "@/views/Company/components/RegisterCompany";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";

const CompanyInformation = dynamic(
  () => import("@/views/Company/components/CompanyInformation"),
  { ssr: false }
);

const CompanyView = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const {
    data: hasCompany,
    isError,
    isLoading,
  } = useContractRead({
    address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
    abi: ghovidentFactoryAbi,
    functionName: "isValidCompany",
    args: [address],
  });

  console.log(hasCompany);

  return (
    <Container>
      {hasCompany ? (
        <div className="space-y-6">
          <CompanyInformation />
          <MyProvidentList />
        </div>
      ) : (
        <RegisterCompany />
      )}
    </Container>
  );
};

export default CompanyView;
