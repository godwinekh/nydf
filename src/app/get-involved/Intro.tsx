"use client";
import Image from "next/image";
import { m as motion } from "framer-motion";

import SchoolTeacher from "@@/assets/images/group-african-kids-paying-attention-class.jpg";
import { SemiCircleBottomRight } from "../components/global/SemiCircle";


export default function Intro() {
  return (
    <div className="pt-16 pb-8 w-full layout bg-pink-50 relative">
      <div className="page-intro">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-3/4 relative"
        >
          <Image
            alt="Kids learning in school"
            src={SchoolTeacher}
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
          <h1 className="heading">Get Involved</h1>
          <p className="subheading">
            Join us in empowering the next generation.
          </p>
        </motion.div>
      </div>

      <SemiCircleBottomRight />
    </div>
  );
}
