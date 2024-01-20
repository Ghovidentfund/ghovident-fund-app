import { Metadata } from "next";

import MainLayout from "@/components/Layout/MainLayout";

export const metadata: Metadata = {
  title: "Provident funds",
  description: "Provident funds",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <section>{children}</section>
    </MainLayout>
  );
}
