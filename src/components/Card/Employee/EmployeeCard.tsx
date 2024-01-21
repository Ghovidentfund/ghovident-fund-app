import { Button } from "@/components/ui/button";
import FundValue from "@/components/Card/Fund/FundValue";
import FundToken from "@/components/Card/Fund/FundToken";
import FundDividend from "@/components/Card/Fund/FundDividend";
import FundInformation from "@/components/Card/Fund/FundInformation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeInvest from "./EmployeeInvest";
import EmployeeCompanyInvest from "./EmployeeCompanyInvest";
import EmployeeInvestTotal from "./EmployeeInvestTotal";
import EmployeeLink from "./EmployeeLink";
import EmployeeStartInvest from "./EmployeeStartInvest";
import EmployeeReturn from "./EmployeeReturn";

interface FundCardProp {
  // Fund Info
  employeeName: string;
  employeeAddress: string;
  employeeInvest: number;
  companyInvest: number;
  total: number;
  employeeLink: string;
  startInvest: string;
  returnInvest: string;
  symbol: string;

  actionSlot?: React.ReactNode;
}

const EmployeeCard = ({
  employeeName,
  employeeAddress,
  employeeInvest,
  companyInvest,
  total,
  employeeLink,
  startInvest,
  returnInvest,
  symbol,
  actionSlot,
}: FundCardProp) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mb-5 bg-white rounded-lg border-0"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-4">
          <EmployeeInfo name={employeeName} address={employeeAddress} />
          <EmployeeInvest invest={employeeInvest + " " + symbol} />
          <EmployeeCompanyInvest invest={companyInvest + " " + symbol} />
          <EmployeeInvestTotal total={total + " " + symbol} />
          {actionSlot}
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <div className="w-[10%]"></div>
          <div className="flex flex-row w-[90%]">
            <EmployeeLink textLink={employeeLink} />
            <EmployeeStartInvest startDate={startInvest} />
            <EmployeeReturn returnDate={returnInvest} />
            <div className="w-[40%]"></div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EmployeeCard;
