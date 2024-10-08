import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CaretDown from "@/app/components/icons/caretDown";

// Define your navigation links
const links = [
  { text: "home", ref: "/" },
  { text: "about us", ref: "/about-us" },
  {
    text: "what we do",
    ref: "/what-we-do",
    sublinks: [
      { text: "change drive", ref: "/what-we-do/programs/change-drive" },
      { text: "brite futures", ref: "/what-we-do" },
      { text: "project sted", ref: "/what-we-do" },
      { text: "nydf opencourt", ref: "/what-we-do" },
    ],
  },
  { text: "get involved", ref: "/get-involved" },
  { text: "contact us", ref: "#contact" },
  // { text: "store", ref: "/shop" },
];

export default function Navigate() {
  const pathname = usePathname();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <div className="lg:grow order-first lg:order-none w-auto py-2 lg:py-4">
      {/* Navigation Links for small screens */}
      <SideMenu links={links} />

      {/* Navigation links for medium and large screens */}
      <ul className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 md:text-navy lg:text-navy lg:bg-azure-light font-semibold rounded-full text-xs xl:text-sm lg:h-full lg:px-7">
        {links.map((link, index) =>
          link.sublinks ? (
            <li
              className="flex-item shrink-0 py-2 relative"
              key={link.text + index}
              onMouseLeave={() => {
                setShowDropDown(false);
              }}
            >
              <p
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
                onMouseEnter={() => {
                  setShowDropDown(true);
                }}
                className={`nav-link text-center flex items-center gap-1 ${
                  pathname === link.ref
                    ? "bg-azure text-white hover:text-navy"
                    : ""
                }`}
              >
                {link.text}
                <CaretDown className={`${showDropDown && "rotate-180"}`} />
              </p>

              {showDropDown && (
                <div className="absolute top-12 left-0 w-44 flex flex-col items-left justify-center gap-1 p-2 bg-white rounded-md">
                  {link.sublinks.map((sublink, index) => (
                    <Link
                      href={sublink.ref}
                      key={sublink.text + index}
                      className={`nav-link text-left`}
                    >
                      {sublink.text}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ) : (
            <li className="flex-item shrink-0 py-2" key={index}>
              <Link
                href={link.ref}
                className={`nav-link text-center ${
                  pathname === link.ref
                    ? "bg-azure text-white hover:text-navy"
                    : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
