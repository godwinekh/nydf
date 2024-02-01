import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  showShopAd: boolean;
  showContactForm: boolean;
}

const initialState: ModalState = {
  showShopAd: true,
  showContactForm: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    closeShopModal(state) {
      state.showShopAd = false;
    },
    toggleContactFormModal(state) {
      state.showContactForm = !state.showContactForm;
    },
  },
});

export const { closeShopModal, toggleContactFormModal, } = modalSlice.actions;

export default modalSlice.reducer;
