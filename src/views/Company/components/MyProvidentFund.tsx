import { providentFund } from "@/constants/fundListMock";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import FundCard from "@/components/Card/Fund/FundCard";
import { Landmark, LogOutIcon, Wallet } from "lucide-react";

const MyProvidentList = () => {
  return (
    <section id="my provident list">
      <Typography variant="topic" size="topic">
        My provident list
      </Typography>
      <div className="grid grid-cols-1 gap-5 mt-8">
        {providentFund.map((item, index) => (
          <div key={index} className="flex flex-col w-full">
            <FundCard
              fundName={item.fundName}
              fundLogoUrl={item.fundLogoUrl}
              period={item.period}
              factSheetUrl={item.factSheetUrl}
              symbol={item.symbol}
              volume={item.volume}
              actionSlot={<div></div>}
            />

            <div className="flex justify-end  -mt-4">
              <div className="space-x-2 bg-white p-2 shadow-md rounded-bl-md rounded-br-md">
                <Button className="min-w-28">
                  <div className="flex items-center space-x-1">
                    <LogOutIcon width={18} height={18} className="-rotate-90" />
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProvidentList;
