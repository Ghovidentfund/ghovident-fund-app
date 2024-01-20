import TokenCard from "../Token/TokenCard";
import SubDetailContainer from "./SubDetailContainer";

interface FundTokenProps {
  symbol: string;
}

const FundToken = ({ symbol }: FundTokenProps) => {
  return (
    <SubDetailContainer label="Token Support">
      <div>
        <TokenCard symbol={symbol} name="Tether" />
      </div>
    </SubDetailContainer>
  );
};

export default FundToken;
