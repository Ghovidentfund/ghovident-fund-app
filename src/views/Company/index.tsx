"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Container from "@/components/Common/Container";
import RegisterCompany from "@/views/Company/components/RegisterCompany";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";

const CompanyInformation = dynamic(
  () => import("@/views/Company/components/CompanyInformation"),
  { ssr: false }
);

const CompanyView = () => {
  const [hasCompany, setHasCompany] = useState(!false);

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
