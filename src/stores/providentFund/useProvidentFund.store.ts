import { StoreApi, create } from "zustand";
import {
  IUseProvidentFundState,
  IUseProvidentFundStore,
} from "./useProvidentFund.type";

const initialState: IUseProvidentFundState = {
  providentFund: {
    thisAddress: "",
    assets: "",
    factSheetUri: "",
    fund: "",
    logoUri: "",
    name: "",
    period: "",
    risk: "",
    totalVolume: BigInt(0),
    volume: BigInt(0),
  },
  hasCompany: false,
};

const useProvidentFund = create<IUseProvidentFundStore>(
  (
    set: StoreApi<IUseProvidentFundStore>["setState"],
    get: StoreApi<IUseProvidentFundStore>["getState"]
  ) => ({
    ...initialState,
    setHasCompany(hasCompany) {
      set({ hasCompany });
    },
    setProvidentFund: (fund: ProvidentFund) => {
      set({ providentFund: fund });
    },
  })
);

export default useProvidentFund;
