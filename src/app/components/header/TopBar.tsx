"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useAppSelector } from "@/lib/hooks";
import NydfLogo from "@@/assets/images/nf-logo.png";
import ShoppingCart from "@/app/components/icons/cart";
import Navigate from "./Navigation";

export default function TopBar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const isShop = pathname.startsWith("/shop");
  const cartItems = useAppSelector((state) => state.cart.totalItems);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 7500);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 flex flex-row sm:max-lg:justify-evenly items-center gap-7 layout ${
        isShop ? "lg:gap-8 lg:px-14" : "lg:gap-12 px-4 md:px-12 lg:px-24"
      } lg:py-1 bg-white lg:bg-white shadow-md z-50`}
    >
      <div className="lg:shrink-0 max-lg:grow flex items-center justify-center gap-2 p-1">
        <Link href="/">
          <Image
            alt="NYDF-LOGO"
            src={NydfLogo}
            quality={100}
            className="w-16 h-auto lg:w-14"
            placeholder="blur"
          />
        </Link>
        <h3
          className={`${
            isShop ? "block" : "hidden"
          } uppercase font-extrabold text-xl text-orange-yellow`}
        >
          shop
        </h3>
      </div>

      <Navigate />

      <Link href="/shop/cart" className={`${isShop ? "block" : "hidden"} relative`}>
        <ShoppingCart />
        {cartItems > 0 && (
          <p className="absolute -top-1.5 -right-1.5 w-5 h-5 flex justify-center items-center rounded-full bg-orange-yellow text-white text-sm">
            {cartItems}
          </p>
        )}
      </Link>

      {/* Donate button */}
      <Link
        href="/donate"
        className="flex-none px-4 py-2 rounded-lg shadow bg-orange-yellow text-white text-base"
        style={{
          animation: `${
            isAnimating ? "shake .5s ease-in-out forwards" : "none"
          }`,
        }}
      >
        Donate
      </Link>
    </div>
  );
}
