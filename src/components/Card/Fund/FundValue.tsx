import { formatNumber } from "@/utils/formatNumber";
import SubDetailContainer from "./SubDetailContainer";

interface FundValueProps {
  volume: number;
  symbol: string;
}

const FundValue = ({ volume, symbol }: FundValueProps) => {
  return (
    <SubDetailContainer label="Volume">
      <div className="font-semibold text-black text-sm space-x-2">
        <span>{formatNumber(parseFloat(String(volume)))}</span>
        <span className="text-gray-500">{symbol}</span>
      </div>
    </SubDetailContainer>
  );
};

export default FundValue;
