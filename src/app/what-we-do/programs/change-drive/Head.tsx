import { Gochi_Hand } from "next/font/google";

const gochi = Gochi_Hand({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export default function Letterhead() {
  return (
    <div className="py-10 px-8 md:px-10 space-y-5 border-2 border-orange-yellow bg-[#FDB61CAB]">
      <div>
        <h4>Nixerlex Youth Development Foundation</h4>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10 py-12">
        <h1 className="grow text-right leading-[1.1] text-7xl text-orange-yellow-light ">
          Change <span className="uppercase">Drive</span>
        </h1>
        <div className="border-b-2 sm:border-r-2 my-2 border-black border-dashed"></div>
        <div className="flex items-center">
          <p className={`text-3xl my-2 ${gochi.className}`}>
            Inspiring youths through community engagement
          </p>
        </div>
      </div>
    </div>
  );
}
