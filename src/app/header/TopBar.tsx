"use client";
import Image from "next/image";
import NydfLogo from "@/images/nf-logo.png";
import Navigate from "./Navigation";
import { usePathname } from "next/navigation";
import ShoppingCart from "@/images/icons/cart";
import { useAppSelector } from "@/redux/hooks";

export default function TopBar() {
  const pathname = usePathname();
  const isShop = pathname === "/shop";
  const cartItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <div
      className={`sticky top-0 flex flex-row sm:max-lg:justify-evenly items-center gap-7 ${
        isShop ? "lg:gap-8" : "lg:gap-12"
      } layout lg:py-1 lg:mb-10 bg-white lg:bg-white shadow-md z-50`}
    >
      <div className="lg:shrink-0 max-lg:grow flex items-center justify-center gap-2 p-1">
        <Image
          alt="NYDF-LOGO"
          src={NydfLogo}
          quality={100}
          className="w-16 h-auto lg:w-14"
          placeholder="blur"
        />
        <h3
          className={`${
            isShop ? "block" : "hidden"
          } uppercase font-extrabold text-xl text-orange-yellow`}
        >
          shop
        </h3>
      </div>

      <Navigate />

      <div className={`${isShop ? "block" : "hidden"} relative`}>
        <ShoppingCart />
        {cartItems > 0 && (
          <p className="absolute -top-1.5 -right-1.5 w-5 h-5 flex justify-center items-center rounded-full bg-orange-yellow text-white text-sm">
            {cartItems}
          </p>
        )}
      </div>

      {/* Donate button */}
      <button className="flex-none px-4 py-2 font-semibold rounded-lg shadow-lg bg-orange-yellow text-white">
        Donate
      </button>
    </div>
  );
}
