import { employee } from "@/constants/employeeMock";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";
import EmployeeCard from "@/components/Card/Employee/EmployeeCard";
import { CircleDollarSign, LogOutIcon } from "lucide-react";

const EmployeeList = () => {
  return (
    <section id="my provident list">
      <Typography variant="topic" size="topic">
        Employee list
      </Typography>
      <div className="grid grid-cols-1 gap-5 mt-8">
        {employee.map((item, index) => (
          <EmployeeCard
            key={index}
            employeeName={item.employeeName}
            employeeAddress={item.employeeAddress}
            employeeInvest={item.employeeInvest}
            companyInvest={item.companyInvest}
            total={item.total}
            employeeLink={item.employeeLink}
            startInvest={item.startInvest}
            returnInvest={item.returnInvest}
            symbol={item.symbol}
            actionSlot={
              <div
                className="flex flex-col space-y-2 w-[20%] md:pl-16
              "
              >
                <Button className="min-w-28">
                  <div className="flex items-center space-x-1 m-w">
                    <LogOutIcon width={18} height={18} />
                    <span className="text-xs">Withdraw</span>
                  </div>
                </Button>

                <Button className="min-w-28" variant="reverse">
                  <div className="flex items-center space-x-1">
                    <CircleDollarSign width={18} height={18} />
                    <span className="text-xs">Loan</span>
                  </div>
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default EmployeeList;
