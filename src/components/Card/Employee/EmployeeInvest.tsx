import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  invest: React.ReactNode;
}

const EmployeeInvest = ({ invest }: FundDividendProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-[20%]">
      <SubDetailContainer label="Member">
        <div className="text-sm">{invest}</div>
      </SubDetailContainer>
    </div>
  );
};

export default EmployeeInvest;
