import dynamic from "next/dynamic";

import Structure from "../components/global/Structure";
import ComingSoon from "./cart/CartEmpty";

const Welcome = dynamic(() => import("./Welcome"));
const Products = dynamic(() => import("./products/Products"));
const Discount = dynamic(() => import("./Discount"));
const Impact = dynamic(() => import("./Impact"));

export default function Shop() {
  return (
    <Structure>
      {/* <ComingSoon /> */}
      <Welcome />
      <Products />
      <Discount />
      <Impact />
    </Structure>
  );
}
