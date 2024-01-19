"use client";

import { ConnectKitButton } from "connectkit";

import { Skeleton } from "@/components/ui/skeleton";

const ConnectButton = () => {
  return <ConnectKitButton showBalance />;
};

export const ConnectButtonSkeleton = () => {
  return <Skeleton className="w-[140px] h-10 rounded-full bg-gray-200" />;
};

export default ConnectButton;
