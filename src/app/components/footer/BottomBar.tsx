import Image from "next/image";
import NydfNamedLogo from "@@/assets/images/nf-named-logo.png";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

const currentYear = new Date().getFullYear()

export default function BottomBar() {
  const pathname = usePathname();
  const shopRoutes = pathname.startsWith("/shop")

  const text = shopRoutes ? "NYDF is a registered NGO in Nigeria (No. 202918)" : "Nixerlex Youth Development Foundation";

  return (
    <Fragment>
      <footer className="layout relative py-10 bg-white">
        <div
          className={`flex items-center gap-3 ${
            shopRoutes ? "justify-between flex-row-reverse" : "flex-col justify-center"
          }`}
        >
          <div className="w-20 h-auto mb-7 md:mb-0 ">
            <Image
              alt="NYDF-LOGO"
              src={NydfNamedLogo}
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="text-sm text-navy">
            <p>&copy; {currentYear} {text}</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
