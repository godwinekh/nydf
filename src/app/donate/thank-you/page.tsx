"use client";
import { m as motion } from "framer-motion";

import Structure from "../../components/global/Structure";
import ThumbsUp from "@/app/components/icons/thumbsUp";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ThankYou() {
  const searchParams = useSearchParams();

  const donationStatus = searchParams.get("status");

  return (
    <Structure>
      <div className="py-16 px-5 text-center flex flex-col gap-8 justify-center items-center w-full h-full bg-gradient-to-b from-azure-light to-white">
        <h5 className="">
          {donationStatus === "successful"
            ? "Donation was successful"
            : "Oops! We did not receive your donation"}
        </h5>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, bounce: 0.5 }}
        >
          {donationStatus === "successful" ? (
            <ThumbsUp
              className="w-28
h-28 text-green-700"
            />
          ) : (
            <p className="text-6xl">&#128542;</p>
          )}
        </motion.div>

        <div className="pb-10 text-center">
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className={`text-3xl md:text-5xl mb-1 font-bold ${
              donationStatus === "successful"
                ? "text-green-700"
                : "text-amber-500"
            }`}
          >
            {donationStatus === "successful"
              ? "Thank You!"
              : "Please Try Again"}
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-navy"
          >
            {donationStatus === "successful"
              ? "You're a Change Maker."
              : "We hope you try again!"}
          </motion.p>
        </div>

        {donationStatus !== "successful" && <Link href='/donate' className="animate-link">Go back to Donate Page</Link>}
      </div>
    </Structure>
  );
}
