"use client";
import Image from "next/image";
import Link from "next/link";
import { m as motion } from "framer-motion";

import { TRole } from "./Roles";

export default function Role({
  category,
  image,
  text,
  action,
  color,
  link,
}: TRole) {
  return (
    <div className="py-10">
      <h4 className={`mb-2 uppercase font-bold text-2xl text-${color}`}>
        {category}
      </h4>

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
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} className="hover:shadow-lg">
            <Link
              href={link}
              target="_blank"
              className={`px-8 py-3 rounded-xl text-white bg-${color}`}
            >
              {action}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
