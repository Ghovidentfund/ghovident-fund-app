import Link from "next/link";
import SubDetailContainer from "./SubDetailContainer";

interface FundDividendProps {
  textLink: string;
}

const EmployeeLink = ({ textLink }: FundDividendProps) => {
  return (
    <div className="text-sm content-start w-[20%]">
      Link URL : <Link href={textLink ? textLink : ""} id="employee-link" className="text-blue-700">
        {textLink}
      </Link>
    </div>
  );
};

export default EmployeeLink;
