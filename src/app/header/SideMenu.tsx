import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HappyChildren from "@/images/happy-children.png";
import Hamburger from "@/images/icons/hamburger";

interface NavigationLink {
  text: string;
  ref: string;
}

interface SlideMenuProps {
  links: NavigationLink[];
}

interface MenuState {
  open: boolean;
}

export default function SideMenu({ links }: SlideMenuProps) {
  // Initialize state using the MenuState interface
  const [menuState, setMenuState] = useState<MenuState>({ open: false });

  return (
    <div>
      <div className="lg:hidden py-3">
        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setMenuState({ open: !menuState.open })}
          className="focus:outline-none text-white"
        >
          <Hamburger className="w-10 h-10" />
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`lg:hidden space-x-5 backdrop-2 ${menuState.open ? "block" : "hidden"}`}
      >
        <div
          className={`fixed top-0 left-0 bg-gray-100 h-full w-5/6 z-50 transition-transform ease-in-out duration-1000 transform ${
            menuState.open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Headline */}
          <div className="flex items-center pt-5 pr-5 bg-gradient-to-b from-azure to-navy text-white">
            <div className="grow flex flex-col text-center">
              <h5 className="text-white my-0">NYDF</h5>
              <p className="text-sm">The change starts with YOU!</p>
              <p className="text-sm">Yes You!</p>
            </div>

            <div className="w-2/5 h-auto">
              <Image
                alt="Happy Children"
                src={HappyChildren}
                quality={100}
                placeholder="blur"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Close Icon */}
          <div className="absolute bottom-16 flex justify-center w-full">
            <button
              onClick={() => setMenuState({ open: false })}
              className="py-3 w-1/2 rounded-xl bg-navy text-white focus:outline-none"
            >
              Close
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col mt-12 px-5">
            <div>
              <h6 className="border-b-2 border-gray-300 py-1 mb-3">
                Go to
              </h6>
              <ul>
                {links.map((link, index) => (
                  <li className="py-2" key={index}>
                    <Link
                      href={link.ref}
                      className="nav-link"
                      onClick={() => setMenuState({ open: false })}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
