import Image from "next/image";
import NydfNamedLogo from "@@/assets/images/nf-named-logo.png";
import { Fragment } from "react";

export default function BottomBar() {
  return (
    <Fragment>
      <footer className="layout relative py-10 bg-white">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="w-20 h-auto mb-7 md:mb-0 ">
            <Image
              alt="NYDF-LOGO"
              src={NydfNamedLogo}
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="text-sm text-navy">
            <p>&copy; 2024 Nixerlex Youth Development Foundation</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
