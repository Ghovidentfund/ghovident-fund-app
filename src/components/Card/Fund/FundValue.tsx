import SubDetailContainer from "./SubDetailContainer";

interface FundValueProps {
  volume: number;
  symbol: string;
}

const FundValue = ({ volume, symbol }: FundValueProps) => {
  return (
    <SubDetailContainer label="Volume">
      <div className="font-semibold text-green-800">
        {volume} {symbol}
      </div>
    </SubDetailContainer>
  );
};

export default FundValue;
