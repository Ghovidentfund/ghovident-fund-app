"use client";

import { useState } from "react";

import Container from "@/components/Common/Container";
import RegisterCompany from "@/views/Company/components/RegisterCompany";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import CompanyInformation from "@/views/Company/components/CompanyInformation";

const CompanyView = () => {
  const [hasCompany, setHasCompany] = useState(false);

  return (
    <Container>
      {hasCompany ? (
        <div>
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
