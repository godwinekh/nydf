import { TopBar } from "@/app/header/TopBar";
import { Fragment } from "react";
import Structure from "../structure";
import BottomBar from "../footer/BottomBar";
import Meet from "./Meet";
import Story from "./Story";
import { Connect } from "../home/Connect";

export default function AboutUs() {
  return (
    <Fragment>
      <TopBar />
      <Structure>
        <Story />
        <Meet />
        <Connect />
      </Structure>
      <BottomBar />
    </Fragment>
  );
}
