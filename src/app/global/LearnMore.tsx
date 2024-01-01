import ArrowRight from "@/images/icons/arrowRight";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function LearnMore({ href }: { href: Url }) {
  return (
    <div className="w-full pt-20 px-8 flex justify-end">
      <Link href={href} className="flex gap-3 text-azure">
        Learn more
        <ArrowRight />
      </Link>
    </div>
  );
}
