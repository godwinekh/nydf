import Image from "next/image";
import Hoodie from "@/images/hoodie.png";
import ChevronRight from "@/images/icons/chevronRight";
import ShoppingBag from "@/images/icons/shoppingBag";
import Close from "@/images/icons/close";

interface ShopModalProps {
  closeModal: () => void;
}

export default function ShopModal({ closeModal }: ShopModalProps) {
  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center justify-center px-2 py-10 w-full h-full bg-black bg-opacity-75"
    >
      <div className="w-full md:w-1/2 lg:w-2/5 rounded-md overflow-hidden bg-white shadow-2xl relative">
        <div className="px-6 py-5 my-0 flex items-center w-full text-center">
          <ShoppingBag className="w-12 h-12 text-navy" />
          <div className="grow text-center">
            <h5 className="my-0 mb-1">Shop for a cause</h5>
            <p className="text-sm">Every purchase is a donation!</p>
          </div>
          <button onClick={closeModal}>
            <Close />
          </button>
        </div>
        <Image
          alt="hoodie"
          src={Hoodie}
          quality={100}
          className="w-full h-80"
          style={{
            objectFit: "cover",
          }}
        />

        <div className="flex flex-col px-4 py-7 text-center">
          <p className="text-md mb-2">
            Nixerlex Youth Development Foundation Store
          </p>
          <p className="text-xs leading-relaxed">
            Every branded material you buy directly contributes to building
            successful youths through the program and activities of the
            foundation.
          </p>
        </div>

        <button className="w-full flex justify-between px-4 py-3 text-xl font-light bg-gradient-to-r from-navy to-azure text-white">
          <span className="grow text-center">Go to shop now</span>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
