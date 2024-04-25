"use client";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/lib/hooks";

const CartItem = dynamic(() => import("./CartItem"));

export default function CartItems() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <div className="pt-10 pb-24 w-full layout relative bg-[#d9d9d9]">
      <div className="w-full p-4 flex flex-col gap-10">
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
