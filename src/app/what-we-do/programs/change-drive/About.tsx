import { Gochi_Hand } from "next/font/google";

const gochi = Gochi_Hand({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="py-16 px-5">
      <h3 className={`text-5xl text-white ${gochi.className}`}>About</h3>

      <div className="space-y-5 mt-6">
        <p>
          Change DRIVE is an NYDF youth development program dedicated to
          harnessing the power of community service to cultivate strong
          character and leadership skills in young people while promoting
          awareness for the United Nations Sustainable Development Goals (SDGs).
        </p>

        <p>
          Through hands-on service projects aligned with the SDGs and meaningful
          engagement with their communities, participants not only make a
          tangible difference in the lives of others but also develop essential
          qualities such as empathy, responsibility, and resilience.
        </p>

        <p>
          Change DRIVE empowers youth to become proactive agents of change,
          instilling in them a sense of purpose and a commitment to making the
          world a better place. Join us as we drive towards a brighter future,
          one act of service at a time, all while contributing to the global
          effort towards achieving the SDGs.
        </p>
      </div>
    </div>
  );
}
