import { TopBar } from "@/app/header/TopBar";
import { Fragment } from "react";
import Structure from "../structure";
import BottomBar from "../footer/BottomBar";

export default function AboutUs() {
  return (
    <Fragment>
      <TopBar />
      <Structure>
        <div></div>
      </Structure>
      <BottomBar />
    </Fragment>
  );
}
