import { Fragment } from "react";
import Structure from "../global/Structure";
import Welcome from "./Welcome";
import Products from "./Products/Products";
import Discount from "./Discount";
import Impact from "./Impact";

export default function Shop() {
  return (
    <Fragment>
      <Structure>
        <Welcome />
        <Products />
        <Discount />
        <Impact />
      </Structure>
    </Fragment>
  );
}
