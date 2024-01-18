"use client";

import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import customTheme from "./theme.json";
import { arbitrumSepolia } from "viem/chains";

const chains = [sepolia, arbitrumSepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Chains
    chains,

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

interface WrapConnectKitProviderProps {
  children: React.ReactNode;
}

const WrapConnectKitProvider = ({ children }: WrapConnectKitProviderProps) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider customTheme={customTheme}>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default WrapConnectKitProvider;
