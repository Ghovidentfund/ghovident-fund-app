import { Metadata } from "next";

import MainLayout from "@/components/Layout/MainLayout";

export const metadata: Metadata = {
  title: "Your company",
  description: "Company",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <section>{children}</section>
    </MainLayout>
  );
}
