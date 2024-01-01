import Image from "next/image";
import Link from "next/link";
import Knuckles from "@/images/touching-knuckles.png";
import { SemiCircleTopLeft } from "../home/SemiCircle";

export default function Collaborate() {
  return (
    <div className="pt-10 pb-24 w-full bg-gradient-to-b from-orange-yellow-light to-white relative">
      <div className="w-full h-64 relative z-40">
        <Image
          alt="Touching Knuckles"
          src={Knuckles}
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="layout py-8 space-y-20">
        <div>
          <h3 className="text-2xl capitalize font-bold text-azure mb-3">
            collaborative impact
          </h3>
          <p className="mb-10">
            In our pursuit of excellence, we collaborate with reputable domestic
            and international organizations. These partnerships enable us to
            deliver impactful programs that have positively influenced young
            Nigerians, propelling them to excel in both their businesses and
            careers.
          </p>
          <p>
            Through our programs and initiatives, we strive to make a positive
            impact on the lives of young individuals, empowering them to
            overcome challenges and achieve their full potential.
          </p>
        </div>

        <div>
          <h3 className="text-2xl capitalize font-bold text-azure mb-3">
            Join us in creating change
          </h3>
          <p>
            Explore our{" "}
            <Link href="/community" className="font-bold">
              Get Involved
            </Link>{" "}
            page to see how you can contribute to our mission and be a part of
            the Nixerlex story.
          </p>
        </div>
      </div>

      <SemiCircleTopLeft />
    </div>
  );
}
