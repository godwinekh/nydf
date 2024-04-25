import Plant from "@@/assets/images/plant.png";
import Image from "next/image";
import Link from "next/link";

export default function ProgramBanner() {
  return (
    <div className="bg-gradient-to-r  from-[#E07A1B] to-[#FDB61C] px-4 md:px-16 lg:px-40">
      <div className="flex justify-center md:justify-between items-center gap-4">
        <div className="font-bold text-white text-right text-lg sm:text-2xl leading-[1.1]">
          <Link href="/what-we-do/programs/change-drive">
            Change <span className="uppercase">Drive</span>
          </Link>
        </div>

        <div className="space-y-1">
          <p className="text-xs md:text-xl leading-[1.1]">Tree Planting Exercise</p>
          <p className="text-xs text-center hidden sm:block md:hidden">
            Join us on <span className="font-bold text-white">May 4, 2024</span>
          </p>
        </div>

        <div className="">
          <Image
            src={Plant}
            alt="An uprooted plant"
            quality={100}
            className="w-20 h-16 md:w-20 md:h-20"
          />
        </div>

        <div className="hidden md:block">
          <p>
            Join us on <span className="font-bold text-white">May 4, 2024</span>
          </p>
          <p className="text-xs">to plant trees in selected areas in Lagos</p>
        </div>

        <div>
          <Link
            href="https://forms.gle/CSCM8ZchpR8UZ7x4A"
            target="_blank"
            className="uppercase px-4 py-2 text-navy bg-gradient-to-r from-white to-orange-yellow-light rounded-xl font-bold  md:text-xl"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
