import Image from "next/image";
import Link from "next/link";
import bandOfYouths from "@@/assets/images/together.jpg";
import ExternalLink from "@/app/components/icons/externalLink";
import {
  SemiCircleTopLeft,
  SemiCircleBottomRight,
} from "../components/global/SemiCircle";
import Ellipsis from "../components/global/Ellipsis";
import LearnMore from "../components/global/LearnMore";

const communityOptions = [
  {
    group: "donate",
    urlToJoin: "https://forms.gle/ShRKgBBVy6S4D8U88",
    brief:
      "Support our cause by making a donation. Your contribution directly impacts the lives of young individuals and help create lasting positive change.",
  },
  {
    group: "volunteer",
    urlToJoin: "https://forms.gle/y1z25Ekus3TmqGBL7",
    brief:
      "Become a part of our community by volunteering your time and expertise. Together, we can make a difference.",
  },
  {
    group: "membership",
    urlToJoin: "https://forms.gle/sKPjR49vxftcqE3f9",
    brief:
      "Become a member of the Nixerlex Community and connect with fellow change agents today!",
  },
];

export function Together() {
  return (
    <div id="get-involved" className="layout py-24 relative">
      <h2 className="flex justify-end gap-3">
        <div className="hidden md:block">
          <Ellipsis />
        </div>
        <span>Join us in creating positive change</span>
      </h2>

      <div className="bg-wrap">
        <Image
          alt="A united band of youth in a circle"
          src={bandOfYouths}
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          className=""
          style={{
            objectFit: "cover",
          }}
        />
        {/* Backdrop and Text */}
        <div className="backdrop-2">
          <div className="px-16 pt-16 md:pt-24 text-white text-center">
            <p className="mb-5 p-5">
              Whether you are a passionate individual, a dedicated educator or a
              potential partner, there are many ways to get involved and
              contribute to our mission.
            </p>
            <p className="text-3xl md:text-5xl font-extrabold">#GetInvolved</p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {communityOptions.map((option, index) => (
          <div key={index}>
            <Link
              href={option.urlToJoin}
              className="flex w-72 gap-2 items-center page-link"
              target="_blank"
            >
              <span className="font-extrabold text-2xl capitalize my-3">
                {option.group}
              </span>
              <ExternalLink className="w-8 h-8" />
            </Link>
            <p className="paragraph">{option.brief}</p>
          </div>
        ))}
      </div>

      <LearnMore href="/get-involved" />

      <SemiCircleBottomRight />
      <SemiCircleTopLeft />
    </div>
  );
}
