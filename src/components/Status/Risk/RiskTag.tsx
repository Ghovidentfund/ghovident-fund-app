import { RiskStatus } from "./RiskStatus";

interface RiskTagProps {
  period: string;
}

const RiskTag = ({ period }: RiskTagProps) => {
  switch (period) {
    case "1m": {
      return <RiskStatus variant={period}>Low</RiskStatus>;
    }
    case "3m": {
      return <RiskStatus variant={period}>Moderate</RiskStatus>;
    }
    case "6m": {
      return <RiskStatus variant={period}>High</RiskStatus>;
    }
    case "1y": {
      return <RiskStatus variant={period}>Very high</RiskStatus>;
    }
  }
};

export default RiskTag;
