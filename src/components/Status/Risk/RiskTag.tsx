import { RiskStatus } from "./RiskStatus";

interface RiskTagProps {
  period: string;
}

const RiskTag = ({ period }: RiskTagProps) => {
  switch (period) {
    case "1":
    case "1m": {
      return <RiskStatus variant="1m">Low</RiskStatus>;
    }
    case "2":
    case "3m": {
      return <RiskStatus variant="3m">Moderate</RiskStatus>;
    }
    case "3":
    case "6m": {
      return <RiskStatus variant="6m">High</RiskStatus>;
    }
    case "4":
    case "1y": {
      return <RiskStatus variant="1y">Very high</RiskStatus>;
    }
  }
};

export default RiskTag;
