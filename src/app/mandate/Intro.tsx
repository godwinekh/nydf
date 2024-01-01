import Image from "next/image";
import CheerfulYouths from "@/images/cheerful-youths.jpg";
import { SemiCircleBottomRight } from "../home/SemiCircle";

export default function Intro() {
  return (
    <div className="pt-16 pb-8 w-full layout bg-azure-light relative">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center relative overflow-hidden rounded-3xl">
        <div className="w-full md:w-3/4 relative">
          <Image
            alt="Cheerful Youths Working Together"
            src={CheerfulYouths}
            quality={100}
            placeholder="blur"
            className="w-full h-full rounded-3xl"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="absolute top-0 md:relative w-full text-center md:text-left py-5 md:w-1/2 bg-orange-yellow bg-opacity-80 md:bg-inherit">
          <h1 className="md:mb-4 text-navy font-extrabold">What we do</h1>
          <p className="text-white md:text-inherit">
            Creating opportunities for future generations.
          </p>
        </div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
