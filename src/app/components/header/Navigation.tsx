import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

// Define your navigation links
const links = [
  { text: "home", ref: "/" },
  { text: "about us", ref: "/about-us" },
  { text: "what we do", ref: "/what-we-do" },
  { text: "get involved", ref: "/get-involved" },
  { text: "contact us", ref: "#contact" },
  // { text: "store", ref: "/shop" },
];

export default function Navigate() {
  const pathname = usePathname();

  return (
    <div className="lg:grow order-first lg:order-none w-auto py-2 lg:py-4">
      {/* Navigation Links for small screens */}
      <SideMenu links={links} />

      {/* Navigation links for medium and large screens */}
      <ul className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 md:text-navy lg:text-navy lg:bg-azure-light font-semibold rounded-full text-xs xl:text-sm lg:h-full lg:px-7">
        {links.map((link, index) => (
          <li className="flex-item shrink-0 py-2" key={index}>
            <Link
              href={link.ref}
              className={`nav-link text-center ${
                pathname === link.ref ? "bg-azure text-white hover:text-navy" : ""
              }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
