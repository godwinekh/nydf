import Image from "next/image";
import Teamwork from "@/images/teamwork.jpg";
import LearnMore from "../components/global/LearnMore";

export default function Impact() {
  return (
    <div id="impact" className="py-24 w-full layout">
      <h2 className="">Our Impact and Your Purchase</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="w-full lg:w-1/2 ">
          <p className="pb-8">
            Every purchase you make goes towards supporting our mission of
            empowering young individuals. Here&apos;s how your contribution
            makes a difference:
          </p>

          <div className="pl-8">
            <ul className="list-disc">
              <li className="text-lg py-1">
                <span className="text-xl font-semibold">
                  Education Initiatives:{" "}
                </span>{" "}
                Your purchase helps provide quality education resources to
                underserved youth.
              </li>
              <li className="text-lg py-1">
                <span className="text-xl font-semibold">
                  Skill Development Programs:{" "}
                </span>{" "}
                Funding from merchandize sales goes into creating comprehensive
                skill development opportunities.
              </li>
              <li className="text-lg py-1">
                <span className="text-xl font-semibold">
                  Sport Initiatives:{" "}
                </span>{" "}
                Support our sports programs and initiatives aimed at creating
                opportunities for success in sports and promote healthy
                lifestyle.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-start items-start px-2 w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              alt="Illustration of teamwork"
              src={Teamwork}
              quality={100}
              placeholder="blur"
              className="w-full h-auto"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="space-y-4">
            <p>Don&apos;t just stop at shopping. Do more!</p>
            <p>
              Learn more about how you can get involved in our other
              initiatives, donate directly, or volunteer your time to make an
              even greater impact.
            </p>
          </div>
        </div>
      </div>

      <LearnMore href="/community" />
    </div>
  );
}
