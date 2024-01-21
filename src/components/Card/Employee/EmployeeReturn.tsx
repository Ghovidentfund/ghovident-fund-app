import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  returnDate: React.ReactNode;
}

const EmployeeReturn = ({ returnDate }: FundDividendProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-[20%]">
    <SubDetailContainer label="Return">
      <div className="text-sm">{returnDate}</div>
    </SubDetailContainer>
    </div>
  );
};

export default EmployeeReturn;
