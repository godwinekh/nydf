import Image from "next/image";
import NYDFLogo from "@/images/nf-logo.png";
import ShoppingBag from "@/images/icons/shoppingBag";

export default function ComingSoon() {
  return (
    <div className="py-32 flex flex-col gap-8 justify-center items-center w-full h-full bg-gradient-to-b from-azure to-orange-yellow-light">
      <ShoppingBag className="w-44 h-44" />

      <div className="pb-10">
        <p className="text-4xl font-bold">NYDF Shop is coming soon! <span className="text-7xl">&#127881;</span></p>
      </div>
    </div>
  );
}
