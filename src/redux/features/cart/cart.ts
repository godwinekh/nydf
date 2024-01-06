import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StaticImageData } from "next/image";

interface Item {
  name: string;
  price: string;
  image: StaticImageData;
  quantity: number;
  size: "s" | "m" | "l" | "xl" | "xxl" | undefined;
  color: { code: string; primary: string; secondary: string } | null;
}

interface CartState {
  cartItems: Item[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state) {
      state.totalItems += 1;
    },
  }
});

export const {addToCart,} = cartSlice.actions

export default cartSlice.reducer;
