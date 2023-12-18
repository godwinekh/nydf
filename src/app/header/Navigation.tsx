import Link from "next/link";
import SideMenu from "./SideMenu";

// Define your navigation links
const links = [
  { text: "home", ref: "/" },
  { text: "what we do", ref: "/#what-we-do" },
  { text: "get involved", ref: "/#get-involved" },
  { text: "contact us", ref: "/#contact" },
  { text: "about us", ref: "/about" },
  { text: "shop", ref: "/shop" },
];

export default function Navigate() {
  
  return (
    <div className="lg:grow order-first lg:order-none w-auto py-2 lg:py-0">
      {/* Navigation Links for small screens */}
      <SideMenu links={links} />

      {/* Navigation links for medium and large screens */}
      <ul className="hidden lg:flex items-center justify-center gap-1 md:text-navy lg:text-white lg:bg-azure font-semibold text-sm lg:py-3 lg:h-full lg:px-7">
        {links.map((link, index) => (
          <li className="flex-item shrink-0 py-2" key={index}>
            <Link
              href={link.ref}
              className="nav-link text-center"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
