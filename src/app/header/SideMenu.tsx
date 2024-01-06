import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HappyChildren from "@/images/nf-logo.png";
import Hamburger from "@/images/icons/hamburger";
import Close from "@/images/icons/close";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div>
      <div className="lg:hidden py-3">
        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setMenuState({ open: !menuState.open })}
          className="focus:outline-none text-azure"
        >
          <Hamburger className="w-10 h-10" />
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`lg:hidden space-x-5 backdrop-2 ${
          menuState.open ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed top-0 left-0 bg-navy text-white h-full w-full overflow-auto flex flex-col md:w-5/6 px-10 md:px-16 z-50 transition-transform ease-in-out duration-1000 transform ${
            menuState.open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Headline */}
          <div className="flex flex-wrap justify-between items-center gap-10 py-10">
            <div className="flex gap-4">
              <div className="w-28 h-auto">
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

              <div className="flex flex-col text-lg leading-5 tracking-wide">
                <p>Nixerlex </p>
                <p>Youth</p>
                <p> Development</p>
                <p>Foundation</p>
              </div>
            </div>

            {/* Close Icon */}
            <div>
              <button
                onClick={() => setMenuState({ open: false })}
                className="flex justify-center items-center w-8 h-8 border rounded-full text-white hover:scale-110 focus:outline-none"
              >
                <Close />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grow flex flex-col py-10">
            <div className="text-3xl">
              <ul className="space-y-5">
                {links.map((link, index) => (
                  <li className="py-2" key={index}>
                    <Link
                      href={link.ref}
                      className={`nav-link tracking-wider ${pathname === link.ref ? "text-orange-yellow" : ""}`}
                      onClick={() => setMenuState({ open: false })}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-2 items-end py-10">
            <p>TheChangeStartsWithUS</p>
            <p className="text-xs text-gray-500">&copy; 2024 Nixerlex Youth Development Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
