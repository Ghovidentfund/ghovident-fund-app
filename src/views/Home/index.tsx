import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import Container from "@/components/Common/Container";
import FundCard from "@/components/Card/Fund/FundCard";
import { providentFund } from "@/constants/fundListMock";

const HomeView = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Typography variant="topic" size="topic">
          Provident fund list
        </Typography>
        <Button>
          <Plus className="h-5 mr-2" />
          <span>Create provident fund</span>
        </Button>
      </div>

      <div className="my-4">filter</div>

      <section id="provident fund list" className=" mb-12">
        <div className="grid grid-cols-1 gap-5">
          {providentFund.map((item, index) => (
            <FundCard
              key={index}
              fundName={item.fundName}
              fundLogoUrl={item.fundLogoUrl}
              period={item.period}
              factSheetUrl={item.factSheetUrl}
              symbol={item.symbol}
              volume={item.volume}
              actionSlot={
                <div className="ml-16 flex flex-col justify-center items-center ">
                  <Button className="min-w-28" disabled>
                    Buy
                  </Button>
                </div>
              }
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HomeView;
