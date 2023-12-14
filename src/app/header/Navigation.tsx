"use client";
import Link from "next/link";
import SideMenu from "./SideMenu";


export default function Navigate() {
  // Define your navigation links
  const links = {
    page: ["what we do", "get involved", "contact us"],
    global: ["home", "contact us", "about us", "nydf shop"],
  };

  return (
    <div className="grow order-last lg:order-none w-full md:w-auto py-2">
      {/* Navigation Links for small screens */}
      <SideMenu links={links} />

      {/* Navigation links for medium and large screens */}
      <ul className="hidden md:flex items-center justify-center gap-2 text-blue-900 font-semibold text-sm">
        {links.global.map((link, index) => (
          <li className="flex-item shrink-0 py-2" key={index}>
            <Link
              href={`${index === 4 ? "/" : "/#"}${link.replace(/ /g, "-")}`}
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
