import FundCard from "@/components/Card/Fund/FundCard";
import Container from "@/components/Common/Container";
import { Typography } from "@/components/Typography";

const HomeView = () => {
  return (
    <Container>
      <Typography variant="topic" size="topic">
        Provident fund list
      </Typography>
      <section id="provident fund list" className="my-12">
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
