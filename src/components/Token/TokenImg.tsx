import Image from "next/image";

export interface TokenImgProps {
  symbol: string;
  width?: number;
  height?: number;
  alt?: string;
}

const TokenImg = ({
  symbol,
  width = 32,
  height = 32,
  alt = "token uri",
}: TokenImgProps) => {
  return (
    <Image
      src={`https://gho.aave.com/icons/tokens/${symbol?.toLocaleLowerCase()}.svg`}
      width={width}
      height={height}
      alt={alt + symbol}
    />
  );
};

export default TokenImg;
