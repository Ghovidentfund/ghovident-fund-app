export const formatNumber = (num: number | string, min = 2, max = 6) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });
};

export const formatToFixedNoRoundUp = (num: number, decimalPlaces = 2) => {
  const multiplier = Math.pow(10, decimalPlaces);
  const fixedNum = Math.floor(num * multiplier) / multiplier;
  return Number(fixedNum.toFixed(decimalPlaces)).toLocaleString("en-US", {
    maximumFractionDigits: decimalPlaces,
  });
};
