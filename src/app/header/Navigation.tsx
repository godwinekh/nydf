"use client";
import ArrowLeft from "@/images/icons/arrowLeft";
import ArrowRight from "@/images/icons/arrowRight";
import { useState } from "react";
import Link from "next/link";

interface SliderNavigationState {
  activeIndex: number;
}

export default function Navigate() {
  // Define your navigation links
  const links = [
    "home",
    "what we do",
    "get involved",
    "contact us",
    "about us",
  ];

  // Initialize state using the SliderNavigationState interface
  const [sliderNavigationState, setSliderNavigationState] =
    useState<SliderNavigationState>({
      activeIndex: 0,
    });

  // Function to handle moving to the next link
  const nextSlide = () => {
    setSliderNavigationState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % links.length,
    }));
  };

  // Function to handle moving to the previous link
  const prevSlide = () => {
    setSliderNavigationState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + links.length) % links.length,
    }));
  };

  return (
    <div className="grow order-last lg:order-none w-full md:w-auto py-2">
      {/* Navigation Links for small screens */}
      <div className="flex md:hidden items-center justify-between overflow-x-hidden px-3">
        <button onClick={prevSlide} className="focus:outline-none">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex flex-shrink-0">
          {/* Display only the active link */}
          <Link
            href={`${sliderNavigationState.activeIndex === 4 ? '/': '/#'}${links[sliderNavigationState.activeIndex].replace(
              / /g,
              "-"
            )}`}
            className="nav-link"
          >
            {links[sliderNavigationState.activeIndex]}
          </Link>
        </div>

        <button onClick={nextSlide} className="focus:outline-none">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links for medium and large screens */}
      <ul className="hidden md:flex items-center justify-center gap-2 text-blue-900 font-semibold text-sm">
        {links.map((link, index) => (
          <li className="flex-item shrink-0 py-2" key={index}>
            <Link href={`${index === 4 ? '/' : '/#'}${link.replace(/ /g, "-")}`} className="nav-link text-center">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
