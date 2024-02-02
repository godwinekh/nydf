import Link from "next/link";
import { SemiCircleTopLeft } from "../components/global/SemiCircle";

export default function Charge() {
  return (
    <div className="py-24 w-full layout relative bg-gradient-to-b from-orange-yellow-light to-white">
      <div className="px-20 space-y-10">
        <div>
          <h3 className="text-3xl text-orange-yellow capitalize mb-3">
            Our commitment
          </h3>
          <p>
            As we look ahead, our commitment to youth development remains
            unwavering. We continue to innovate, collaborate, and strive for
            excellence in our programs, ensuring that each young individual we
            touch is equipped with the tools to thrive in an ever-evolving
            world.
          </p>
        </div>

        <div>
          <h3 className="text-3xl text-orange-yellow capitalize mb-3">
            Join us on the journey
          </h3>
          <p>
            Whether you are a potential partner, donor, volunteer, or a yound
            individual seeking empowerment, we invite you to join us on this
            journey of creating lasting positive change. Together, we can
            inspire, empower, and advocate for a brighter future.
          </p>

          <p className="pt-5">
            Explore our{" "}
            <Link href="/get-involved" className="font-bold animate-link">
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
