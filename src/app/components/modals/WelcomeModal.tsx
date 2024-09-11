import Image from "next/image";
import MentalHealthPopupPortrait from "@@/assets/images/mental-health-popup-mobile.png";
import MentalHealthPopup from "@@/assets/images/mental-health-popup.png";
import ChevronRight from "@/app/components/icons/chevronRight";
// import ShoppingBag from "@/app/components/icons/shoppingBag";
import Close from "@/app/components/icons/close";
import Link from "next/link";
import { useEffect } from "react";
import Calendar from "../icons/calendar";
// import TakeNote from "@/app/components/icons/takeNote";

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
          <Calendar className="w-12 h-12 text-navy hidden sm:block" />
          <div className="grow text-center">
            <h5 className="my-0 mb-1">save the date</h5>
            <p className="text-sm">
              To prioritize your mental health
            </p>
          </div>
          <button onClick={closeModal} className="hidden sm:block">
            <Close className="w-8 h-8" />
          </button>
        </div>
        <div className="sm:hidden">
          <Image
            alt="Mental Health Image"
            src={MentalHealthPopupPortrait}
            quality={100}
            className="w-full"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="hidden sm:block">
          <Image
            alt="Mental Health Image"
            src={MentalHealthPopup}
            quality={100}
            className="w-full"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        {/* <div className="flex flex-col px-4 py-5 text-center">
          <p className="text-md mb-2">
            NYDF and Your Mental Health
          </p>
          <p className="text-xs leading-relaxed">
            With the rising pressures and demands of our daily lives, it is ever more important to normalize a regular mental care. We are building a 24/7 available online check-in program where youths can easily get help to resolve stress in their lives. Let&apos;s deescalate before it even escalates! Please take the survey to help us build it right for you. The survey only takes less than 10 mins.
          </p>
        </div> */}

        <div className="flex">
          <button onClick={closeModal} className="w-2/5 sm:hidden">
            Close
          </button>
          <Link
            href="https://bit.ly/NYDFMHday"
            target="_blank"
            onClick={closeModal}
            className="w-3/5 sm:w-full flex justify-between px-4 py-3 text-sm md:text-xl font-light bg-gradient-to-r from-navy to-azure text-white"
          >
            <span className="grow text-center">Register for the event</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
