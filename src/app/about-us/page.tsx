import Structure from "../components/global/Structure";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./Intro"));
const Brief = dynamic(() => import("./Brief"));
const More = dynamic(() => import("./More"));
const Charge = dynamic(() => import("./Charge"));

export default function AboutUs() {
  return (
    <Structure>
      <Intro />
      <Brief />
      <More />
      <Charge />
    </Structure>
  );
}
