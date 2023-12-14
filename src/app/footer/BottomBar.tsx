import Image from "next/image";
import NydfNamedLogo from "@/images/nf-named-logo.png";

export default function BottomBar() {
  return (
    <footer className="layout relative pt-12 pb-24 lg:pb-40 bg-gradient-to-b from-pink-50 to-white">
      <div className="flex justify-between items-center">
        <div className="w-28 h-auto mb-7 md:mb-0 ">
          <Image
            alt="NYDF-LOGO"
            src={NydfNamedLogo}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="text-sm">
          <a href="#" className="page-link">Become a Sponsor/Partner</a>
        </div>
      </div>

      <div className="absolute bottom-7 text-gray-300">
        <p>&copy; 2024 NYDF</p>
      </div>
    </footer>
  );
}
