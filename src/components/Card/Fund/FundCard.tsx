import { Button } from "@/components/ui/button";
import FundValue from "@/components/Card/Fund/FundValue";
import FundToken from "@/components/Card/Fund/FundToken";
import FundDividend from "@/components/Card/Fund/FundDividend";
import FundInformation from "@/components/Card/Fund/FundInformation";

interface FundCardProp {
  // Fund Info
  fundLogoUrl: string;
  period: string;
  factSheetUrl: string;

  // Token Support
  symbol: string;

  // Fund Volume
  volume: number;

  disabled?: boolean;
}

const FundCard = ({
  fundLogoUrl,
  period,
  factSheetUrl,
  symbol,
  volume,
  disabled,
}: FundCardProp) => {
  return (
    <div className="flex justify-between bg-white rounded-xl  px-6 py-3 h-full shadow-lg">
      <FundInformation
        fundLogoUrl={fundLogoUrl}
        period={period}
        factSheetUrl={factSheetUrl}
      />
      <FundToken symbol={symbol} />
      <FundDividend period="1 year return" />

      <div id="Volume" className="flex">
        <FundValue volume={volume} symbol={symbol} />

        <div className="ml-16 flex flex-col justify-center ">
          <Button disabled={disabled} className="min-w-28">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
