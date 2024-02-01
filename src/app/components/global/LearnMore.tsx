import ChevronRight from "@/images/icons/chevronRight";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function LearnMore({ href }: { href: Url }) {
  return (
    <div className="w-full pt-20 px-8 flex justify-end">
      <Link href={href} className="flex gap-3 text-azure hover:text-navy transition-transform hover:scale-105 duration-200 ease-linear">
        <p className="animate-link">Learn more</p>
        <ChevronRight />
      </Link>
    </div>
  );
}
