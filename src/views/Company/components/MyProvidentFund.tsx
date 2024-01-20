import { providentFund } from "@/constants/fundListMock";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import FundCard from "@/components/Card/Fund/FundCard";

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
                <Button className="min-w-28">Withdraw</Button>

                <Button className="min-w-28">Claim</Button>

                <Button className="min-w-28">Supply</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProvidentList;
