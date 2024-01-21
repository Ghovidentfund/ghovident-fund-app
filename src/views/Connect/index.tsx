"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import Footer from "@/components/Common/Footer/Footer";

const ConnectView = () => {
  return (
    <div className="flex flex-row w-full min-h-screen items-center relative">
      <div className="flex flex-col md:flex-row items-center justify-around w-full container z-10 mb-32">
        <section id="content" className="md:max-w-[50%] pb-5">
          <div className="mt-6">
            <div className="text-2xl md:text-7xl font-bold">Ghovident fund</div>
            <div className="text-lg mt-4">
              <span>
                Integrating blockchain technology for an enhanced quality of
                life for employees.
              </span>
            </div>
          </div>

          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress }) => {
              return (
                <Link href={"/home"} id="logo">
                  <Button className="mt-6 rounded-2xl">Launch App</Button>
                </Link>
              );
            }}
          </ConnectKitButton.Custom>
        </section>

        <section id="present-img">
          <Image
            src={"/assets/home.png"}
            width={700}
            height={558}
            alt="provident-fund-logo"
          />
        </section>
      </div>
      <div className="fixed bottom-0 flex justify-center w-full bg-primary">
        <div className="container mx-auto flex justify-between items-center py-3 min-h-12 text-white text-xs">
          Copyright &#169; Ghovident 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default ConnectView;
