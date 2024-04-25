import Structure from "@/app/components/global/Structure";
import Head from "./Head";
import About from "./About";
import Projects from "./projects/Projects";

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
