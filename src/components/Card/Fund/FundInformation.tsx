import { FileSpreadsheet } from "lucide-react";

import RiskTag from "@/components/Status/Risk/RiskTag";

export interface FundInformationProps {
  fundLogoUrl: string;
  period: string;
  factSheetUrl: string;
}

const FundInformation = ({
  fundLogoUrl,
  period,
  factSheetUrl,
}: FundInformationProps) => {
  return (
    <div id="fund information" className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full ">
        {fundLogoUrl ? (
          <picture>
            <img src={fundLogoUrl} alt="" className="w-14 h-14 rounded-full" />
          </picture>
        ) : (
          <div className="text-gray-500">logo</div>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-black font-bold text-lg">Provident Fund</div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Risk :</span>
          <div className="flex">
            <RiskTag period={period} />
          </div>
        </div>
        <a
          href={factSheetUrl}
          target="_blank"
          className="flex items-center space-x-1 underline"
        >
          <FileSpreadsheet width={16} height={16} />
          <span className="text-sm">fact sheet</span>
        </a>
      </div>
    </div>
  );
};

export default FundInformation;
