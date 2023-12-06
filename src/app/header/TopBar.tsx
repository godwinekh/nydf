import Image from "next/image";
import NydfLogo from "@/images/nf-logo.png";
import Navigate from "./Navigation";


export function TopBar() {
  return (
    <div className="flex flex-col lg:flex-row items-center md:gap-7 layout py-7 bg-gradient-to-b from-blue-100 to-white">
      <div className="flex-none w-20 h-16 mb-7 md:mb-0 ">
        <Image
          alt="NYDF-LOGO"
          src={NydfLogo}
          quality={100}
          placeholder="blur"
        />
      </div>

      <Navigate />

      {/* Donate button */}
      <button className="flex-none w-full lg:w-auto px-4 py-2 font-semibold lg:rounded-lg shadow-md bg-amber-400 text-white">Donate</button>
    </div>
  );
}
