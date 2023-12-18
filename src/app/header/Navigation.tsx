"use client";
import Link from "next/link";
import SideMenu from "./SideMenu";


export default function Navigate() {
  // Define your navigation links
  const links = {
    page: ["what we do", "get involved", "contact us"],
    global: [
      "home",
      "what we do",
      "get involved",
      "contact us",
      "about us",
      "shop",
    ],
  };

  return (
    <div className="lg:grow order-first lg:order-none w-auto py-2 lg:py-0">
      {/* Navigation Links for small screens */}
      <SideMenu links={links} />

      {/* Navigation links for medium and large screens */}
      <ul className="hidden lg:flex items-center justify-center gap-1 md:text-navy lg:text-white lg:bg-azure font-semibold text-sm lg:py-3 lg:h-full lg:px-7">
        {links.global.map((link, index) => (
          <li className="flex-item shrink-0 py-2" key={index}>
            <Link
              href={`${index === 4 || index === 5 ? "/" : "/#"}${link.replace(/ /g, "-")}`}
              className="nav-link text-center"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
