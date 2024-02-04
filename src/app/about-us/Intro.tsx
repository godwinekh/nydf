"use client";
import Image from "next/image";
import YoungMillenials from "@@/assets/images/young-millennials.jpg";
import { SemiCircleBottomRight } from "../components/global/SemiCircle";

import { m as motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="pt-16 pb-8 w-full layout bg-[#FEF9DE] relative">
      <div className="page-intro">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-3/4 relative"
        >
          <Image
            alt="Cheerful Youths Working Together"
            src={YoungMillenials}
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
          transition={{ delay: .25 }}
          className="title"
        >
          <h1 className="heading">About NYDF</h1>
          <p className="subheading">
            Nixerlex Youth Development Foundation
          </p>
        </motion.div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
