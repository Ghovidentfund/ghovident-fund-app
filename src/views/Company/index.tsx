"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAccount, useContractRead } from "wagmi";

import Container from "@/components/Common/Container";
import RegisterCompany from "@/views/Company/components/RegisterCompany";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import useProvidentFund from "@/stores/providentFund/useProvidentFund.store";

const CompanyInformation = dynamic(
  () => import("./components/CompanyInformation"),
  { ssr: false }
);

const CompanyView = () => {
  const { hasCompany } = useProvidentFund();

  const [mounted, setMounted] = useState(false);

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
