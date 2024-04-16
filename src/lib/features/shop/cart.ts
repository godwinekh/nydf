import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface Product {
  name: string;
  price: number;
  image: StaticImageData;
  quantity: number;
  size: "s" | "m" | "l" | "xl" | "xxl" | undefined;
  color: { code: string; primary: string; secondary: string } | null;
}

interface CartState {
  cartItems: Product[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const productItem = action.payload;

      // check if product already exists in cart items
      const isInCart = state.cartItems.filter(
        (product) => product.name === productItem.name
      );

      if (isInCart.length > 0) {
        // find the index of the product in the cart
        const index = state.cartItems.findIndex(
          (item) => item.name === productItem.name
        );
        // update the quantity
        state.cartItems[index].quantity += productItem.quantity;

        // for (let index = 0; index < state.cartItems.length; index++) {
        //   const currentItem = state.cartItems[index];
        //   if (currentItem.name === productItem.name) {
        //     console.log("quantity of item has been updated in the cart.");
        //     state.cartItems[index].quantity += productItem.quantity;
        //     break;
        //   }
        // }
      } else {
        console.log("item has been added to the cart");
        state.cartItems.push(productItem);
        state.totalItems += 1;
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ operation: "minus" | "add"; name: string }>
    ) {
      const operation = action.payload.operation;
      const productName = action.payload.name;
      const index = state.cartItems.findIndex(
        (item) => item.name === productName
      );

      if (operation === "minus") {
        state.cartItems[index].quantity -= 1;
      }

      if (operation === "add") {
        state.cartItems[index].quantity += 1;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const productName = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.name === productName
      );

      state.cartItems.splice(index, 1);
      // update total items in cart;
      state.totalItems -= 1;
    },
    sumTotal(state) {
      const items = state.cartItems;

      // extract the cost of each product for the desired quantity
      const figures = items.map(item => item.price * item.quantity)

      // calc the sum
      if (figures.length > 0) {
        const sum = figures.reduce(
          (accumulator, productCost) => accumulator + productCost
        );

        state.totalAmount = sum;
      }
    }
  },
});

export const { addItem, updateQuantity, removeItem, sumTotal } = cartSlice.actions;

export default cartSlice.reducer;
