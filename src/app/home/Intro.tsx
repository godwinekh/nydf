import Image from "next/image";
import groupAfricans from "@/images/group-africans.jpg";
import RadialBullet from "@/images/radial-bullet.svg";
import { SemiCircleBottomRight } from "../components/global/SemiCircle";

export function Intro() {
  return (
    <div className="relative pb-24">
      <div className="hero-img">
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
          <div className="px-10 md:px-24 pt-44 lg:pt-60 text-white">
            <div className="namespace">
              <h1>Nixerlex Youth</h1>
              <h1>Development Foundation</h1>
            </div>
            <p className="slogan text-sm font-light lg:text-xl">
              The change starts with us.
            </p>
          </div>
        </div>
      </div>

      <div className="layout">
        <h2 className="lg:w-1/2 lg:leading-snug">
          Empowering young people for a prosperous world
        </h2>
        <p className="paragraph indent-10 mb-5">
          <span className="text-2xl uppercase font-semibold">We believe</span> that our collective efforts, no matter how small, add to the betterment of the world. To foster a
          vibrant and prosperous society, it is imperative that we actively
          empower and provide a robust framework, serving as a healthy blueprint
          for the younger generation.
        </p>
        <p className="paragraph indent-10 mb-5">
          As a community,{" "}
          <span className="text-2xl uppercase font-semibold">we strive</span> to
          impact the world by changing it one child, one young woman, one young
          man at a time because we know that the change starts with us!
        </p>

        <div className="px-10 lg:px-20">
          <div className="mt-10 flex gap-4 lg:gap-10">
            <Image
              alt="bullet pointer"
              src={RadialBullet}
              quality={100}
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            />
            <div className="">
              <h5 className="">Our vison</h5>
              <p className="italic paragraph">
                &quot;A prosperous world built by young individuals with growth
                mindsets.&quot;
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-4 lg:gap-10">
            <Image
              alt="bullet pointer"
              src={RadialBullet}
              quality={100}
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            />
            <div className="">
              <h5 className="">Our mission</h5>
              <p className="italic paragraph">
                &quot;To equip young people with the skills, education, mindset
                and opportunities that set them on the path to having a
                successful life, inspiring others, and elevating their
                communities.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
