import { Fragment } from "react";
import Structure from "../global/Structure";
import Meet from "./Meet";
import Story from "./Story";

export default function AboutUs() {
  return (
    <Fragment>
      <Structure>
        <Story />
        <Meet />
      </Structure>
    </Fragment>
  );
}
