import Structure from "@/app/components/global/Structure";
import Head from "./Head";
import About from "./About";
import Projects from "./projects/Projects";

import { Gochi_Hand } from "next/font/google";

export const gochi = Gochi_Hand({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export default function Page() {
  return (
    <Structure>
      <div className="pt-10 pb-24 w-full layout relative bg-[#FBD37C]">
        <Head />
        <About />
        <Projects />
      </div>
    </Structure>
  );
}
