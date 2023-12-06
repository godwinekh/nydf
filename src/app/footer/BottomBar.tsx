import Image from "next/image";
import NydfLogo from "@/images/nf-logo.png";

export default function BottomBar() {
  return (
    <footer className="layout relative pt-12 pb-24 lg:pb-40 bg-gradient-to-b from-pink-50 to-white">
      <div className="flex justify-between items-center">
        <div className="w-24 h-20 mb-7 md:mb-0 ">
          <Image
            alt="NYDF-LOGO"
            src={NydfLogo}
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
