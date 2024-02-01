import Structure from "../components/global/Structure";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./Intro"));
const Join = dynamic(() => import("./Join"));
const Roles = dynamic(() => import("./Roles"));
const ShopBanner = dynamic(() => import("../components/global/ShopBanner"));

export default function Community() {
  return (
    <Structure>
      <Intro />
      <Join />
      <Roles />
      <ShopBanner />
    </Structure>
  );
}
