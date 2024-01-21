import { formatUnits, parseEther } from "viem";

import SubDetailContainer from "./SubDetailContainer";
import { tokens } from "@/constants/tokenList";

interface FundValueProps {
  volume: bigint;
  symbol: string;
  tokenAddress: string;
}

const FundValue = ({ volume, symbol, tokenAddress }: FundValueProps) => {
  return (
    <SubDetailContainer label="Volume">
      <div className="font-semibold text-[#FF7A20] text-sm space-x-2">
        <span>{formatUnits(volume, tokens[tokenAddress].decimal)}</span>
        <span>{symbol}</span>
      </div>
    </SubDetailContainer>
  );
};

export default FundValue;
