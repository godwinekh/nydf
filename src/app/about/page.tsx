import { Fragment } from "react";
import Structure from "../global/Structure";
import More from "./More";
import Intro from "./Intro";
import Brief from "./Brief";
import Charge from "./Charge";

export default function AboutUs() {
  return (
    <Fragment>
      <Structure>
        <Intro />
        <Brief />
        <More />
        <Charge />
      </Structure>
    </Fragment>
  );
}
