import { Fragment } from "react";
import TopBar from "../header/TopBar";
import Structure from "../structure";
import BottomBar from "../footer/BottomBar";
import Welcome from "./Welcome";
import Products from "./Products";

export default function Shop() {
  return (
    <Fragment>
      <TopBar />
      <Structure>
        <Welcome />
        <Products />
      </Structure>
      <BottomBar />
    </Fragment>
  )
}
