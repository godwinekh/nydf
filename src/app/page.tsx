import { Intro } from "@/app/home/Intro";
import { Mandate } from "@/app/home/Mandate";
import { Together } from "@/app/home/Together";
import { Fragment } from "react";
import Structure from "./global/Structure";

export default function Home() {
  return (
    <Fragment>
      <Structure>
        <Intro />
        <Mandate />
        <Together />
      </Structure>
    </Fragment>
  );
}
