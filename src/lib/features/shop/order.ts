import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerData {
  name: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal: string;
}

interface OrderState {
  customer: CustomerData;
  promo?: string;
  delivery: number;
  total: number;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "Nigeria",
  postal: "",
};

const initialState: OrderState = {
  customer: initialValues,
  promo: "",
  delivery: 0,
  total: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    applyPromo() {},
    setOrder(
      state,
      action: PayloadAction<{ customer: CustomerData; cartTotal: number }>
    ) {
      state.customer = action.payload.customer;

      // Set Delivery
      const delivery = 3000;
      state.delivery = delivery;

      // Set Total
      state.total = action.payload.cartTotal + delivery;
    },
  },
});

export const { applyPromo, setOrder } = orderSlice.actions;

export default orderSlice.reducer;
