"use client";
import Link from "next/link";
import Image from "next/image";
import { m as motion } from "framer-motion";

import FacebookYellow from "@@/assets/images/nydf-fbIcon-yellow.svg";
import FacebookBlue from "@@/assets/images/nydf-fbIcon-blue.svg";
import InstagramYellow from "@@/assets/images/nydf-igIcon-yellow.svg";
import InstagramBlue from "@@/assets/images/nydf-igIcon-blue.svg";

const socials = [
  {
    name: "facebook",
    url: "https://www.facebook.com/nixerlexfoundation",
    path: { yellow: FacebookYellow, blue: FacebookBlue },
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/nixerlexfoundation",
    path: { yellow: InstagramYellow, blue: InstagramBlue },
  },
];

export default function Socials({ color }: { color: "yellow" | "blue" }) {
  return (
    <div id="socials" className="flex justify-start items-center py-8">
      {socials.map((media, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }}>
          <Link href={media.url} target="_blank">
            <Image
              alt={media.name}
              src={media.path[color]}
              quality={100}
              width={80}
              height={80}
              className="w-20 h-20"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
