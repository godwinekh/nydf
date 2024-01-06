import ShopBanner from "../global/ShopBanner";
import Structure from "../global/Structure";
import Intro from "./Intro";
import Join from "./Join";
import Roles from "./Roles";

export default function Community() {
  return (
    <Structure>
      <Intro />
      <Join />
      <Roles />
      <ShopBanner />
    </Structure>
  )
}
