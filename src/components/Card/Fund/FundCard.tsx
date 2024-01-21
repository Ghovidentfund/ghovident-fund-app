"use client";

import { Button } from "@/components/ui/button";
import FundValue from "@/components/Card/Fund/FundValue";
import FundToken from "@/components/Card/Fund/FundToken";
import FundDividend from "@/components/Card/Fund/FundDividend";
import FundInformation from "@/components/Card/Fund/FundInformation";
import ReturnText from "@/components/Status/Risk/ReturnText";

interface FundCardProp {
  // Fund Info
  fundName: string;
  fundLogoUrl: string;
  period: string;
  risk: string;
  factSheetUrl: string;
  tokenAddress: string;

  // Token Support
  symbol: string;

  // Fund Volume
  volume: bigint;

  actionSlot?: React.ReactNode;
}

const FundCard = ({
  fundName,
  fundLogoUrl,
  risk,
  period,
  factSheetUrl,
  tokenAddress,
  symbol,
  volume,
  actionSlot,
}: FundCardProp) => {
  return (
    <div className="grid grid-cols-4  bg-white rounded-xl  px-6 py-4 h-full shadow-lg">
      <FundInformation
        fundName={fundName}
        fundLogoUrl={fundLogoUrl}
        risk={risk}
        factSheetUrl={factSheetUrl}
      />
      <FundToken symbol={symbol} />
      <FundDividend period={<ReturnText period={period} />} />

      <div id="Volume" className="flex justify-center">
        <FundValue
          volume={volume}
          symbol={symbol}
          tokenAddress={tokenAddress}
        />

        {actionSlot}
      </div>
    </div>
  );
};

export default FundCard;
