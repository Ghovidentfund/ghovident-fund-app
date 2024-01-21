import { providentFund } from "@/constants/fundListMock";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import FundCard from "@/components/Card/Fund/FundCard";
import { Landmark, LogOutIcon, Package, Wallet } from "lucide-react";
import { useAccount, useContractRead } from "wagmi";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import { tokens } from "@/constants/tokenList";

const MyProvidentList = () => {
  const { address } = useAccount();

  const { data, isError, isLoading, refetch } = useContractRead({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "getMyPools",
    args: [address],
  });

  return (
    <section id="my provident list">
      <Typography variant="topic" size="topic">
        My provident list
      </Typography>
      {(data as ProvidentFund[]).length ? (
        <div className="grid grid-cols-1 gap-5 mt-8">
          {(data as ProvidentFund[])?.map((item, index) => (
            <FundCard
              key={index}
              fundName={item.name}
              fundLogoUrl={item.logoUri}
              period={String(item.period)}
              risk={String(item.risk)}
              factSheetUrl={item.factSheetUri}
              symbol={tokens[item.assets].symbol || ""}
              tokenAddress={item.assets}
              volume={item.volume}
              actionSlot={
                <div className="ml-16 flex flex-col space-y-2">
                  <Button className="min-w-28" variant="black">
                    <div className="flex items-center space-x-1">
                      <LogOutIcon
                        width={18}
                        height={18}
                        className="-rotate-90"
                      />
                      <span className="text-xs">Withdraw</span>
                    </div>
                  </Button>

                  <Button className="min-w-28">
                    <div className="flex items-center space-x-1">
                      <Wallet width={18} height={18} />
                      <span className="text-xs">Claim</span>
                    </div>
                  </Button>

                  <Button className="min-w-28" variant="reverse">
                    <div className="flex items-center space-x-1">
                      <Landmark width={18} height={18} />
                      <span className="text-xs">Supply</span>
                    </div>
                  </Button>
                </div>
              }
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center w-full justify-center text-gray-400">
          <Package width={40} height={40} />
          <span>No result</span>
        </div>
      )}
    </section>
  );
};

export default MyProvidentList;
