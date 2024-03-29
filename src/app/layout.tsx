import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import WrapConnectKitProvider from "@/providers/WrapConnectKitProvider";
import UIProvider from "@/providers/UIProvider";

export const metadata: Metadata = {
  title: "Ghovident",
  description:
    "Integrating blockchain technology for an enhanced quality of life for employees.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background")}>
        <WrapConnectKitProvider>
          <UIProvider>{children}</UIProvider>
        </WrapConnectKitProvider>
      </body>
    </html>
  );
}
