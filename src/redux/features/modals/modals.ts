import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  showShopAd: boolean;
  showContactForm: boolean;
}

const initialState: ModalState = {
  showShopAd: false,
  showContactForm: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleShopAdModal(state, action:PayloadAction<boolean>) {
      state.showShopAd = action.payload;
    },
    toggleContactFormModal(state) {
      state.showContactForm = !state.showContactForm;
    },
  },
});

export const { toggleShopAdModal, toggleContactFormModal, } = modalSlice.actions;

export default modalSlice.reducer;
