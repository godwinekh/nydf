"use client";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion } from "framer-motion";

import NydfLogo from "@/images/nf-logo.png";
import DonateForm from "./DonateForm";
import Socials from "../components/global/Socials";
import Info from "@/images/icons/info";

export default function Donate() {
  const loadFeatures = () => import("../features").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <div className="w-full h-full relative flex flex-col md:flex-row justify-start md:justify-between items-center py-6 md:py-8 lg:py-16 px-2 md:px-10 md:gap-6 lg:gap-12 lg:px-20 bg-gradient-to-b from-azure to-white">
        <div className="flex flex-col items-center text-center md:text-left md:block">
          <div className="w-16 h-16 md:w-40 md:h-40 rounded-full overflow-hidden relative flex justify-center items-center bg-white md:p-8 md:mb-10 shadow-lg">
            <Image
              alt="NYDF-LOGO"
              src={NydfLogo}
              quality={100}
              className="w-10 h-auto md:w-20 lg:w-24"
              placeholder="blur"
            />
          </div>

          <div className="">
            <h5 className="text-xl md:text-2xl">
              Nixerlex Youth Development Foundation
            </h5>
            <p className="text-xs md:text-base">
              We appreciate your interest in helping us making real change.
            </p>
          </div>

          <div className="md:mt-20 md:mb-8 flex gap-2">
            <Info className="w-10 h-10" />
            <p className="text-xs">
              We are currently unable to process international donations. If you
              are outside Nigeria and you wish to make a donations please{" "}
              <Link
                href="mailto:donations.nixerlexfoundation.org"
                className="animate-link font-semibold"
              >
                Click here
              </Link>
            </p>
          </div>

          <p className="text-xs hidden md:block">
            For further support and assistance, please contact us on:{" "}
            <Link
              href="mailto:connect@nixerlexfoundation.org"
              className="animate-link font-bold"
            >
              connect@nixerlexfoundation.org
            </Link>
          </p>
        </div>

        <div className="w-full my-10 md:my-0 md:w-1/2 lg:w-1/3 h-full z-30 shrink-0">
          <DonateForm />
        </div>

        <div className="md:hidden">
          <p className="text-sm">
            For further support and assistance, please contact us on:{" "}
            <Link
              href="mailto:connect@nixerlexfoundation.org"
              className="animate-link font-bold"
            >
              connect@nixerlexfoundation.org
            </Link>
          </p>
        </div>
      </div>
    </LazyMotion>
  );
}
