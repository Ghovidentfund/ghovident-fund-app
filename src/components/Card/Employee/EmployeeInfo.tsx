import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  name: React.ReactNode;
  address: React.ReactNode;
}

const EmployeeInfo = ({ name, address }: FundDividendProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-[20%]">
      <SubDetailContainer label="">
        <div className="text-xs mb-2">{address}</div>
        <div className="text-sm">{name}</div>
      </SubDetailContainer>
    </div>
  );
};

export default EmployeeInfo;
