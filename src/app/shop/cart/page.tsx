"use client";
import dynamic from "next/dynamic";

import Structure from "../../components/global/Structure";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import CartEmpty from "./CartEmpty";
import { Fragment, useEffect } from "react";
import { sumTotal } from "@/lib/features/shop/cart";

const CartHeader = dynamic(() => import("./CartHeader"));
const CartItems = dynamic(() => import("./CartItems"));
const CartTotal = dynamic(() => import("./CartTotal"));

export default function Page() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(sumTotal());
  });

  return (
    <Structure>
      {cartItems.length === 0 && <CartEmpty />}

      {cartItems.length > 0 && (
        <Fragment>
          <CartHeader />
          <CartItems />
          <CartTotal />
        </Fragment>
      )}
    </Structure>
  );
}
