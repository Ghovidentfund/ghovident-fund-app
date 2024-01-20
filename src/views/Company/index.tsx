"use client";

import { useState } from "react";

import Container from "@/components/Common/Container";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import CompanyInformation from "@/views/Company/components/CompanyInformation";
import RegisterCompany from "./components/RegisterCompany";

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
