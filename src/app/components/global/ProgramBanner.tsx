import Banner from "@@/assets/images/NYDF Website Banner-min.png";
import Image from "next/image";
import Link from "next/link";

export function ProgramBannerText() {
  return (
    <div className="bg-gradient-to-r from-navy to-navy px-4 md:px-24 py-4">
      <div className="flex justify-between md:justify-between items-end gap-4">
        <div className="shrink-0 font-bold text-white text-right text-lg sm:text-xl leading-[1.1]">
          <p>Introducing Mental Calm</p>
          {/* <Link href="/what-we-do/programs/change-drive">
          </Link> */}
        </div>

        <div className="space-y-1">
          <p className="hidden lg:block text-white lg:text-xs xl:text-md leading-[1.1]">
            Tell us about your mental health to help us build a program just for
            you!
          </p>
          {/* <p className="text-xs text-center hidden sm:block md:hidden">
            Join us on <span className="font-bold text-white">May 4, 2024</span>
          </p> */}
        </div>

        {/* <div className="">
          <Image
            src={Plant}
            alt="An uprooted plant"
            quality={100}
            className="w-20 h-16 md:w-20 md:h-20"
          />
        </div> */}
        {/*
        <div className="hidden md:block">
          <p>
            Join us on <span className="font-bold text-white">May 4, 2024</span>
          </p>
          <p className="text-xs">to plant trees in selected areas in Lagos</p>
        </div> */}

        <div>
          <Link
            href="https://forms.gle/CSCM8ZchpR8UZ7x4A"
            target="_blank"
            className="uppercase px-4 md:px-8 py-1.5 text-white bg-gradient-to-r from-gray-900 via-azure to-gray-900 rounded-md font-bold text-sm shadow-lg"
          >
            Take survey
          </Link>
        </div>
      </div>
      <p className="block lg:hidden text-white md:text-left text-xs leading-[1.1] pt-2">
        The survey only takes less than 10 minutes!
      </p>
    </div>
  );
}

export function ProgramBannerImage() {
  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src={Banner}
          alt="An uprooted plant"
          quality={100}
          className="w-full h-20"
        />
      </div>

      <div className="absolute top-0 right-0 z-20 flex justify-center items-center h-full w-[30%]">
        <div>
          <Link
            href="https://forms.gle/CSCM8ZchpR8UZ7x4A"
            target="_blank"
            className="uppercase px-4 py-2 text-navy bg-gradient-to-r from-white to-orange-yellow-light rounded-xl font-bold  md:text-xl"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
