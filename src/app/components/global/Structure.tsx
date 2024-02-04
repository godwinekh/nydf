"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { LazyMotion } from "framer-motion";

import TopBar from "../header/TopBar";
import Connect from "../footer/Connect";
import BottomBar from "../footer/BottomBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleShopAdModal } from "@/redux/features/modals/modals";

const ShopModal = dynamic(() => import("../modals/ShopModal"), { ssr: false });
const ContactFormModal = dynamic(() => import("../modals/ContactFormModal"), {
  ssr: false,
});

export default function Structure({ children }: { children: React.ReactNode }) {
  const { showContactForm, showShopAd } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isShop = pathname === "/shop";

  const closeModal = () => {
    localStorage.setItem("hasModalBeenShown", "true");
    dispatch(toggleShopAdModal(false));
  };

  useEffect(() => {
    const storedExpirationTime = localStorage.getItem("modalExpirationTime");
    const expirationTime = storedExpirationTime
      ? parseInt(storedExpirationTime, 10)
      : Date.now() + 1800000;

    if (!localStorage.getItem("hasModalBeenShown") && !isShop) {
      dispatch(toggleShopAdModal(true));
    }

    const timeoutId = setTimeout(() => {
      localStorage.removeItem("hasModalBeenShown");
    }, expirationTime - Date.now());

    localStorage.setItem("modalExpirationTime", expirationTime.toString());

    return () => {
      clearTimeout(timeoutId);
      localStorage.removeItem("modalExpirationTime");
    };
  }, [isShop, dispatch]);

  const loadFeatures = () =>
    import("../../framerFeatures").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <TopBar />
      <main className="flex flex-col min-h-screen items-center overflow-hidden relative">
        {children}
        <Connect />

        {!isShop && showShopAd && <ShopModal closeModal={closeModal} />}

        {showContactForm && <ContactFormModal />}
      </main>
      <BottomBar />
    </LazyMotion>
  );
}
