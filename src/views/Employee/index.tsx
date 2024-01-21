"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Container from "@/components/Common/Container";
import EmployeeList from "@/views/Employee/components/EmploreeList";

const CompanyInformation = dynamic(
  () => import("@/views/Company/components/CompanyInformation"),
  { ssr: false }
);

const EmployeeView = () => {
  const [hasCompany, setHasCompany] = useState(!false);

  return (
    <Container>
      <EmployeeList />
    </Container>
  );
};

export default EmployeeView;
