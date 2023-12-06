import BottomBar from "@/app/footer/BottomBar";
import { TopBar } from "@/app/header/TopBar";
import { Connect } from "@/app/home/Connect";
import { Intro } from "@/app/home/Intro";
import { Mandate } from "@/app/home/Mandate";
import { Together } from "@/app/home/Together";
import { Fragment } from "react";
import Structure from "./structure";

export default function Home() {
  return (
    <Fragment>
      <TopBar />
      <Structure>
        <Intro />
        <Mandate />
        <Together />
        <Connect />
      </Structure>
      <BottomBar />
    </Fragment>
  );
}
