export interface IUseProvidentFundState {
  providentFund: ProvidentFund;
  hasCompany: boolean;
}

export interface IUseProvidentFundStore extends IUseProvidentFundState {
  setProvidentFund: (fund: ProvidentFund) => void;
  setHasCompany: (hasCompany: boolean) => void;
}
