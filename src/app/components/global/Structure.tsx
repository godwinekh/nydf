"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { LazyMotion } from "framer-motion";

import TopBar from "../header/TopBar";
import Connect from "../footer/Connect";
import BottomBar from "../footer/BottomBar";
import { useAppSelector } from "@/redux/hooks";

const ShopModal = dynamic(() => import("../modals/ShopModal"), { ssr: false });
const ContactFormModal = dynamic(() => import("../modals/ContactFormModal"), {
  ssr: false,
});

export default function Structure({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { showContactForm } = useAppSelector(
    (state) => state.modal
  );
  const pathname = usePathname();
  const isShop = pathname === "/shop";

  const closeModal = () => {
    localStorage.setItem("hasModalBeenShown", "true");
    setShowModal(false);

    //clear the localStorage after one hour
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("hasModalBeenShown");
    }, 3600);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
    setShowModal(!hasModalBeenShown);

    if (!isShop && showModal) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isShop, showModal]);

  const loadFeatures = () =>
    import("../../features").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <TopBar />
      <main className="flex flex-col min-h-screen items-center overflow-hidden relative">
        {children}
        <Connect />

        {!isShop && showModal && <ShopModal closeModal={closeModal} />}

        {showContactForm && <ContactFormModal />}
      </main>
      <BottomBar />
    </LazyMotion>
  );
}
