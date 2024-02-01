import Link from "next/link";
import { SemiCircleTopLeft } from "./SemiCircle";
import Ellipsis from "./Ellipsis";

export default function ShopBanner() {
  return (
    <div
      id="banner"
      className="py-24 w-full bg-azure text-white layout relative"
    >
      <h2 className="flex gap-3 items-center text-white rounded-2xl py-5">
        <span>
          Shop for a{" "}
          <span className="text-5xl font-extrabold text-white">Cause</span>
        </span>
        <Ellipsis color="bg-white" />
      </h2>

      <div className="w-full">
        <p className="pb-8">
          Every purchase you make goes towards supporting our mission of
          empowering young individuals. Here&apos;s how your contribution makes
          a difference:
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
              <span className="text-xl font-semibold">Sport Initiatives: </span>{" "}
              Support our sports programs and initiatives aimed at creating
              opportunities for success in sports and promote healthy lifestyle.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center pt-10">
        <Link
          href="/shop"
          className="px-14 py-3 text-xl font-light text-navy shadow-lg rounded-xl bg-white hover:bg-navy hover:text-white"
        >
          Visit our store
        </Link>
      </div>

      <SemiCircleTopLeft />
    </div>
  );
}
