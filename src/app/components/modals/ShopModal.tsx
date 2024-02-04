import Image from "next/image";
import ShirtMocKup from "@@/assets/images/t-shirt-modal.jpg";
import ChevronRight from "@/app/components/icons/chevronRight";
import ShoppingBag from "@/app/components/icons/shoppingBag";
import Close from "@/app/components/icons/close";
import Link from "next/link";
import { useEffect } from "react";

interface ShopModalProps {
  closeModal: () => void;
}

export default function ShopModal({ closeModal }: ShopModalProps) {
  useEffect(() => {
    // Add a class to the modal body when the component mounts to trigger the slide-down animation
    const modalBody = document.getElementById("shop-modal-body");
    modalBody?.classList.add("slide-down");

    return () => {
      // Remove the animation class when the component unmounts
      modalBody?.classList.remove("slide-down");
    };
  }, []);

  return (
    <div className="shop-bg fixed top-0 left-0 flex flex-col items-center justify-center px-2 py-10 w-full h-full bg-black bg-opacity-75 z-[60]">
      <div
        id="shop-modal-body"
        className="w-full md:w-2/3 lg:w-3/5 rounded-md overflow-hidden bg-white shadow-2xl"
      >
        <div className="px-6 py-4 my-0 flex items-center w-full text-center">
          <ShoppingBag className="w-12 h-12 text-navy" />
          <div className="grow text-center">
            <h5 className="my-0 mb-1">Shop for a cause</h5>
            <p className="text-sm">Every purchase is a donation!</p>
          </div>
          <button onClick={closeModal}>
            <Close className="w-8 h-8" />
          </button>
        </div>
        <Image
          alt="NYDF T-Shirt MocKup"
          src={ShirtMocKup}
          quality={100}
          className="w-full h-72"
          style={{
            objectFit: "cover",
          }}
        />

        <div className="flex flex-col px-4 py-5 text-center">
          <p className="text-md mb-2">
            Nixerlex Youth Development Foundation Store
          </p>
          <p className="text-xs leading-relaxed">
            Every branded material you buy directly contributes to building
            successful youths through the program and activities of the
            foundation.
          </p>
        </div>

        <Link
          href="/shop"
          onClick={closeModal}
          className="w-full flex justify-between px-4 py-3 text-xl font-light bg-gradient-to-r from-navy to-azure text-white"
        >
          <span className="grow text-center">Go to store now</span>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
