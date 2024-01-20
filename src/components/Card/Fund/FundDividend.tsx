import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  period: React.ReactNode;
}

const FundDividend = ({ period }: FundDividendProps) => {
  return (
    <SubDetailContainer label="Dividend">
      <div className="text-sm">{period}</div>
    </SubDetailContainer>
  );
};

export default FundDividend;
