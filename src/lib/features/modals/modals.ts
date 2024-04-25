import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  showWelcomeAd: boolean;
  showContactForm: boolean;
  showMoreInfo: boolean;
}

const initialState: ModalState = {
  showWelcomeAd: false,
  showContactForm: false,
  showMoreInfo: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleShopAdModal(state, action: PayloadAction<boolean>) {
      state.showWelcomeAd = action.payload;
    },
    toggleContactFormModal(state) {
      state.showContactForm = !state.showContactForm;
    },
    toggleMoreInfoModal(state) {
      state.showMoreInfo = !state.showMoreInfo;
    },
  },
});

export const { toggleShopAdModal, toggleContactFormModal, toggleMoreInfoModal} = modalSlice.actions;

export default modalSlice.reducer;
