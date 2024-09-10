import BannerBg from "@@/assets/images/top-banner-bg.png";
import GoogleMeet from "@@/assets/images/google-meet.png";
import Image from "next/image";
import Link from "next/link";

export default function ProgramBanner() {
  return (
    // <div className="bg-gradient-to-r from-navy to-navy px-4 md:px-24 py-4">
    <div className="relative px-4 md:px-24 py-2">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
        <Image
          src={BannerBg}
          alt="background-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-column justify-between md:justify-between items-center gap-4 z-30">
        <div className="shrink-0 flex flex-col md:flex-row items-center gap-1 font-bold text-white text-md sm:text-xl leading-[1.1]">
          <span className="text-xs bg-orange-yellow text-gray-900 rounded px-2 py-[0.5]">
            Prioritizing your
          </span>
          <span>Mental Health</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="space-y-1 ">
            <p className="hidden lg:block lg:text-xs xl:text-md leading-[1.1] text-gray-200">
              Have a calm meeting with a community that cares at the NYDF
            </p>
            <div className="flex flex-col md:flex-row justify-between font-bold">
              <p className="text-gray-200 hidden sm:block text-md text-center leading-[1.1]">
                EMPOWER MINDS
              </p>
              <p className="text-white text-md text-center leading-[1.1]">
                October 10th, 3PM{" "}
                <span className="font-normal text-xs">(WAT)</span>
              </p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <Image
              src={GoogleMeet}
              alt="An uprooted plant"
              quality={100}
              className="w-24 h-auto"
            />
          </div>
        </div>

        {/*
        <div className="hidden md:block">
          <p>
            Join us on <span className="font-bold text-white">May 4, 2024</span>
          </p>
          <p className="text-xs">to plant trees in selected areas in Lagos</p>
        </div> */}

        <div>
          <Link
            href="https://bit.ly/NYDFMHday"
            target="_blank"
            className="uppercase px-4 md:px-8 py-1.5 text-navy bg-white rounded-md font-bold text-xs sm:text-sm shadow-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
