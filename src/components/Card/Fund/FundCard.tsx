import { Button } from "@/components/ui/button";
import FundValue from "@/components/Card/Fund/FundValue";
import FundToken from "@/components/Card/Fund/FundToken";
import FundDividend from "@/components/Card/Fund/FundDividend";
import FundInformation from "@/components/Card/Fund/FundInformation";

interface FundCardProp {
  // Fund Info
  fundName: string;
  fundLogoUrl: string;
  period: string;
  factSheetUrl: string;

  // Token Support
  symbol: string;

  // Fund Volume
  volume: number;

  actionSlot?: React.ReactNode;
}

const FundCard = ({
  fundName,
  fundLogoUrl,
  period,
  factSheetUrl,
  symbol,
  volume,
  actionSlot,
}: FundCardProp) => {
  return (
    <div className="grid grid-cols-4  bg-white rounded-xl  px-6 py-4 h-full shadow-lg">
      <FundInformation
        fundName={fundName}
        fundLogoUrl={fundLogoUrl}
        period={period}
        factSheetUrl={factSheetUrl}
      />
      <FundToken symbol={symbol} />
      <FundDividend period="1 year return" />

      <div id="Volume" className="flex justify-center">
        <FundValue volume={volume} symbol={symbol} />

        {actionSlot}
      </div>
    </div>
  );
};

export default FundCard;
