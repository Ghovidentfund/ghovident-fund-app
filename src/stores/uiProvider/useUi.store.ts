import { StoreApi, create } from "zustand";
import { IUseUiState, IUseUiStore, ModalView } from "./useUi.type";

const initialState: IUseUiState = {
  displayModal: false,
  modalView: ModalView.REGISTER_COMPANY,
};

const useUiProvider = create<IUseUiStore>(
  (
    set: StoreApi<IUseUiStore>["setState"],
    get: StoreApi<IUseUiStore>["getState"]
  ) => ({
    ...initialState,
    openModal: (view: ModalView) => {
      set({ displayModal: true, modalView: view });
    },
    closeModal: () => {
      set({ displayModal: false });
    },
  })
);

export default useUiProvider;
