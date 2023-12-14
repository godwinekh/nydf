"use client";
import Image from "next/image";
import NydfLogo from "@/images/nf-logo.png";
import Navigate from "./Navigation";
import { usePathname } from "next/navigation";
import ShoppingCart from "@/images/icons/cart";

export default function TopBar() {
  const pathname = usePathname();
  const isShop = pathname === "/shop";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center md:gap-7 ${
        isShop ? "lg:gap-8" : "lg:gap-12"
      } layout py-7 lg:py-0 bg-white shadow-md`}
    >
      <div className="shrink-0 flex items-center gap-2 p-1 mb-7 md:mb-0 ">
        <Image
          alt="NYDF-LOGO"
          src={NydfLogo}
          quality={100}
          className="w-20 h-auto lg:w-14"
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

      <div className={`${isShop ? "block" : "hidden"}`}>
        <ShoppingCart />
      </div>

      {/* Donate button */}
      <button className="flex-none w-full lg:w-auto px-4 py-2 font-semibold text-sm lg:rounded-lg shadow-lg bg-orange-yellow text-white">
        Donate
      </button>
    </div>
  );
}
