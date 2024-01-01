import Image from "next/image";
import { Role } from "./Roles";
import Link from "next/link";

export default function Role({ category, image, text, action, color, link }: Role) {
  return (
    <div className="py-10">
      <h4 className={`mb-2 uppercase font-bold text-2xl text-${color}`}>{category}</h4>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="w-full md:w-1/2 relative">
          <Image
            alt={category}
            src={image}
            quality={100}
            placeholder="blur"
            className="w-full h-full rounded-3xl"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between items-center gap-12 px-5">
          <p>{text}</p>
          <Link href={link} target="_blank" className={`px-8 py-3 rounded-xl text-white bg-${color}`}>
            {action}
          </Link>
        </div>
      </div>
    </div>
  );
}
