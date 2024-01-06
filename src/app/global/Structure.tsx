"use client";
import { Fragment, useEffect, useState } from "react";
import TopBar from "../header/TopBar";
import Connect from "./Connect";
import BottomBar from "../footer/BottomBar";
import { usePathname } from "next/navigation";
import ShopModal from "./modal/ShopModal";

export default function Structure({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isShop = pathname === "/shop";
  const [showModal, setShowModal] = useState<boolean>(false);

  // Check if localStorage is available
  // const hasLocalStorage =
  //   typeof window !== "undefined" && typeof window.localStorage !== "undefined";
   // Check if the modal has already been shown

   const closeModal = () => {
     localStorage.setItem("hasModalBeenShown", "true");
    setShowModal(false);

    //clear the localStorage after one hour
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("hasModalBeenShown");
    }, 3600000);

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

  return (
    <Fragment>
      <TopBar />
      <main
        className="flex flex-col min-h-screen items-center overflow-hidden relative"
      >
        {children}
        <Connect />

        {!isShop && showModal && <ShopModal closeModal={closeModal} />}
      </main>
      <BottomBar />
    </Fragment>
  );
}
