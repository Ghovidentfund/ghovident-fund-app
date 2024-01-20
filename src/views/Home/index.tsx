import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import Container from "@/components/Common/Container";
import FundCard from "@/components/Card/Fund/FundCard";

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
          {Array.from({ length: 10 }).map((_, index) => (
            <FundCard
              key={index}
              fundLogoUrl="https://gho.aave.com/icons/tokens/wbtc.svg"
              period="1m"
              factSheetUrl="https://google.com"
              symbol="WBTC"
              volume={100000000}
              disabled
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HomeView;
