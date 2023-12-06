import Image from "next/image";
import groupAfricans from "@/images/group-africans.jpg";
import { SemiCircleBottomRight } from "./SemiCircle";

export function Intro() {
  return (
    <div className="layout relative pb-24 md:pt-12">
      <div className="bg-wrap">
        <Image
          alt="A Group of African Youths"
          src={groupAfricans}
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        {/* Backdrop and Text */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30">
          <div className="px-10 pt-44 text-white">
            <h1>Nixerlex Youth</h1>
            <h1>Development Foundation</h1>
            <p className="text-sm font-light">The change starts with us.</p>
          </div>
        </div>
      </div>

      <h2>Empowering young people for a prosperous world</h2>
      <p className="paragraph indent-10 mb-5">
        <span className="text-2xl uppercase font-semibold">We believe</span> that it is easier to build a child, than to repair broken women
        and men. The wise, the prudent, the high and mighty and all those who
        contribute positively and meaningfully to the society today, were
        properly mentored and empowered.
      </p>
      <p className="paragraph indent-10 mb-5">
        As a community, <span className="text-2xl uppercase font-semibold">we strive</span> to
        impact the world by changing it one child, one young woman, one young
        man at a time because we know that the change starts with us!
      </p>

      <div className="px-10">
        <div className="mt-10 flex gap-5">
          {/* <RadialBullet className="w-28 h-24" /> */}
          <div className="">
            <h5 className="">Our vison</h5>
            <p className="italic paragraph">
              &quot;A prosperous world built by young individuals with growth
              mindsets.&quot;
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-5">
          {/* <RadialBullet className="" /> */}
          <div className="">
            <h5 className="">Our mission</h5>
            <p className="italic paragraph">
              &quot;To equip young people with the skills, education, mindset
              and opportunities that set them on the path to having a successful
              life, inspiring others, and elevating their communities.&quot;
            </p>
          </div>
        </div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
