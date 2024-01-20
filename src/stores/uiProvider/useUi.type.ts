export enum ModalView {
  REGISTER_COMPANY = "register company",
}

export interface IUseUiState {
  displayModal: boolean;
  modalView: ModalView;
}

export interface IUseUiStore extends IUseUiState {
  openModal: (view: ModalView) => void;
  closeModal: () => void;
}
