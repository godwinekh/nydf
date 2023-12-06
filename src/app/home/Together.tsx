import Image from "next/image";
import bandOfYouths from "@/images/together.jpg";
import ExternalLink from "@/images/icons/externalLink";
import { SemiCircleTopLeft, SemiCircleBottomRight } from "./SemiCircle";
import Ellipsis from "./Ellipsis";
import Link from "next/link";

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
            <p className="text-5xl font-extrabold">#GetInvolved</p>
          </div>
        </div>
      </div>

      <div>
        <Link
          href="#"
          className="flex gap-2 items-center page-link"
          target="_blank"
        >
          <span className="font-extrabold text-2xl capitalize my-3">
            Donate
          </span>
          <ExternalLink className="w-8 h-8" />
        </Link>
        <p className="paragraph">
          Support our cause by making a donation. Your contribution directly
          impacts the lives of young individuals and help create lasting
          positive change.
        </p>
      </div>

      <div className="my-12">
        <Link href="#" className="flex gap-2 items-center page-link">
          <span className="font-extrabold text-2xl capitalize my-3">
            volunteer
          </span>
          <ExternalLink className="w-8 h-8" />
        </Link>
        <p className="paragraph">
          Become a part of our community by volunteering your time and
          expertise. Together, we can make a difference.
        </p>
      </div>

      <div>
        <Link href="#" className="flex gap-2 items-center page-link">
          <span className="font-extrabold text-2xl capitalize my-3">
            membership
          </span>
          <ExternalLink className="w-8 h-8" />
        </Link>
        <p className="paragraph">
          Don&apos;t just peak in through the windows, you can come under the
          roof too. Being a member goes beyond giving to the society. The
          community takes care of its own too.
        </p>
      </div>

      <SemiCircleBottomRight />
      <SemiCircleTopLeft />
    </div>
  );
}
