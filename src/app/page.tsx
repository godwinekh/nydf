import { Intro } from "@/app/home/Intro";
import { Mandate } from "@/app/home/Mandate";
import { Together } from "@/app/home/Together";
import Structure from "./components/global/Structure";

export default function Home() {
  return (
    <Structure>
      <Intro />
      <Mandate />
      <Together />
    </Structure>
  );
}
