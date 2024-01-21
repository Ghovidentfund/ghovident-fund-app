import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
    startDate: React.ReactNode;
}

const EmployeeStartInvest = ({ startDate }: FundDividendProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-[20%]">
    <SubDetailContainer label="Start Investing">
      <div className="text-sm">{startDate}</div>
    </SubDetailContainer>
    </div>
  );
};

export default EmployeeStartInvest;
