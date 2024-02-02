"use client";
import Image from "next/image";
import CheerfulYouths from "@/images/cheerful-youths.jpg";
import { SemiCircleBottomRight } from "../components/global/SemiCircle";

import { m as motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="pt-16 pb-8 w-full layout bg-azure-light relative">
      <div className="page-intro">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-3/4 relative"
        >
          <Image
            alt="Cheerful Youths Working Together"
            src={CheerfulYouths}
            quality={100}
            placeholder="blur"
            className="image"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="title"
        >
          <h1 className="heading">What we do</h1>
          <p className="subheader">
            Creating opportunities for future generations.
          </p>
        </motion.div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
