import Structure from "../components/global/Structure";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./Intro"));
const Description = dynamic(() => import("./Description"));
const Focus = dynamic(() => import("./Focus"));
const Programs = dynamic(() => import("./Programs"));
const Collaborate = dynamic(() => import("./Collaborate"));

export default function Mandate() {
  return (
    <Structure>
      <Intro />
      <Description />
      <Focus />
      <Programs />
      <Collaborate />
    </Structure>
  );
}
