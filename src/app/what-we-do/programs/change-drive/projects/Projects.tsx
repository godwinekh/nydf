import { events } from "./data";
import Project from "./Project";
import { Gochi_Hand } from "next/font/google";

const gochi = Gochi_Hand({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <div className="pb-16 px-5">
      <h3 className={`text-5xl text-white ${gochi.className}`}>Projects</h3>

      <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-6">
        {events.map((event, index) => (
          <Project
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
