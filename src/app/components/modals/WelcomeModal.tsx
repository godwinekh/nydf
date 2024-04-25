import Image from "next/image";
import ChangeDrivePortrait from "@@/assets/images/projects/NYDF Change Drive portrait.png";
import ChangeDrive from "@@/assets/images/projects/NYDF Change Drive.png";
import ChevronRight from "@/app/components/icons/chevronRight";
import ShoppingBag from "@/app/components/icons/shoppingBag";
import Close from "@/app/components/icons/close";
import Link from "next/link";
import { useEffect } from "react";
import Calendar from "../icons/calendar";

interface WelcomeModalProps {
  closeModal: () => void;
}

export default function WelcomeModal({ closeModal }: WelcomeModalProps) {
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
          <Calendar className="w-12 h-12 text-navy" />
          <div className="grow text-center">
            <h5 className="my-0 mb-1">let&apos;s GO!!!</h5>
            <p className="text-sm">May 4th Tree Planting Exercise is almost here</p>
          </div>
          <button onClick={closeModal}>
            <Close className="w-8 h-8" />
          </button>
        </div>
        <div className="sm:hidden">
          <Image
            alt="Change drive tree planting exercise may 2024"
            src={ChangeDrivePortrait}
            quality={100}
            className="w-full h-72"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="hidden sm:block">
          <Image
            alt="Change drive tree planting exercise may 2024"
            src={ChangeDrive}
            quality={100}
            className="w-full h-72 md:h-64"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex flex-col px-4 py-5 text-center">
          <p className="text-md mb-2">
            NYDF Change Drive Tree Planting May 2024
          </p>
          <p className="text-xs leading-relaxed">
            Change DRIVE is an NYDF youth development program dedicated to
            harnessing the power of community service to cultivate strong
            character and help youths become proactive agents of change. Join us
            this May to plant trees.
          </p>
        </div>

        <Link
          href="https://forms.gle/CSCM8ZchpR8UZ7x4A"
          target="_blank"
          onClick={closeModal}
          className="w-full flex justify-between px-4 py-3 text-xl font-light bg-gradient-to-r from-navy to-azure text-white"
        >
          <span className="grow text-center">Volunteer Now</span>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
