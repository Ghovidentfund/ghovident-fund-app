"use client";

import { useAccount } from "wagmi";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";

const CompanyInformation = () => {
  const { address } = useAccount();

  // const {
  //   data: hasCompany,
  //   isError,
  //   isLoading,
  // } = useContractRead({
  //   address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //   abi: ghovidentFactoryAbi,
  //   functionName: "isValidCompany",
  //   args: [address],
  // });

  return (
    <section id="company information">
      <Typography variant="topic" size="topic">
        My company
      </Typography>
      <div className="mt-8">
        <div className="flex bg-white shadow-md py-4 px-6 rounded-md">
          <div className="flex flex-col flex-1 space-y-3">
            <div className="text-xl font-semibold">Provident Fund</div>

            <div className="space-x-1">
              <span className="text-gray-500">Wallet address :</span>
              <span className="font-medium">{address ?? ""}</span>
            </div>

            <div className="space-x-1">
              <span className="text-gray-500">Employee count: </span>
              <span className="font-medium">{100}</span>
            </div>

            <div className="space-x-1">
              <span className="text-gray-500">Link URL :</span>
              <a
                href="https://invoice.spacedev.work"
                target="_blank"
                className="font-medium underline text-blue-500 cursor-pointer"
              >
                Click
              </a>
            </div>
          </div>

          <div>
            <Button variant="reverse">
              <div className="flex items-center space-x-1">
                <View />
                <span>View employee</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInformation;
