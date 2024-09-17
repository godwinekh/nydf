"use client";
import { toggleMoreInfoModal } from "@/lib/features/modals/modals";
import { useAppDispatch } from "@/lib/hooks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectData {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function Project({ image, title, description }: ProjectData) {
  const dispatch = useAppDispatch();

  return (
    <div className="basis-12/12 md:basis-1/3 rounded-xl overflow-hidden bg-white shadow-md shadow-black mt-8">
      <div className="relative ">
        <Image src={image} alt={title} sizes="100vw" quality={100} />
      </div>

      <div className="px-3 py-2">
        <h5 className="text-lg">{title}</h5>
        <p>{description}</p>

        <div className="flex justify-start items-center gap-4 pt-10 pb-4">
          <button
            className="text-black uppercase hover:font-bold"
            onClick={() => dispatch(toggleMoreInfoModal())}
          >
            More Info
          </button>
          <Link
            href="https://youtu.be/9iXMSUcl_kU?si=14arFJfWlMV2npDz"
            target="_blank"
            className="uppercase"
          >
            Event Story
          </Link>
        </div>
      </div>
    </div>
  );
}
