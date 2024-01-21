
interface ReturnTextProps {
  period: string;
}

const ReturnText = ({ period }: ReturnTextProps) => {
  switch (period) {
    case "1":
    case "1m": {
      return "1 month return";
    }
    case "2":
    case "3m": {
      return "3 months return";
    }
    case "3":
    case "6m": {
      return "6 months return";
    }
    case "4":
    case "1y": {
      return "1 years return";
    }
  }
};

export default ReturnText;
