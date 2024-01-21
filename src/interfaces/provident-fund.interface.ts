interface ProvidentFund {
  thisAddress: string;
  assets: string;
  factSheetUri: string;
  fund: string;
  logoUri: string;
  name: string;
  period: string; // You may need to replace this with a more specific type based on the actual data type.
  risk: string; // You may need to replace this with a more specific type based on the actual data type.
  totalVolume: bigint; // You may need to replace this with a more specific type based on the actual data type.
  volume: bigint;
}
