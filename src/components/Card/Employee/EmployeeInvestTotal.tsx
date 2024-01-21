import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  total: React.ReactNode;
}

const EmployeeInvestTotal = ({ total }: FundDividendProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-[20%]">
      {" "}
      <SubDetailContainer label="Total">
        <div className="text-sm text-destructive">{total}</div>
      </SubDetailContainer>
    </div>
  );
};

export default EmployeeInvestTotal;
