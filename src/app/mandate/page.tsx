import Structure from "../global/Structure";
import Collaborate from "./Collaborate";
import Description from "./Description";
import Focus from "./Focus";
import Intro from "./Intro";
import Programs from "./Programs";

export default function Mandate() {
  return (
    <Structure>
      <Intro />
      <Description />
      <Focus />
      <Programs />
      <Collaborate />
    </Structure>
  )
}
