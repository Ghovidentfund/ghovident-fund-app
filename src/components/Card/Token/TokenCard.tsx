import TokenImg, { TokenImgProps } from "@/components/Token/TokenImg";

export interface TokenCardProps extends TokenImgProps {
  name: string;
}

const TokenCard = ({ symbol, name, ...rest }: TokenCardProps) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <TokenImg symbol={symbol} {...rest} />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-400">{symbol}</div>
      </div>
    </div>
  );
};

export default TokenCard;
